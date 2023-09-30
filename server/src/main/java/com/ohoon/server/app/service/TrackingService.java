package com.ohoon.server.app.service;

import com.ohoon.server.app.dto.Result;
import com.ohoon.server.app.dto.TrackingResponse;
import com.ohoon.server.app.dto.TrackingResponse.TrackInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.data.redis.core.ReactiveValueOperations;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class TrackingService {

    private final ReactiveRedisTemplate<String, TrackingResponse> redis;

    private final WebClient webClient;

    public Mono<Result<TrackInfo>> track(String rgist) {
        return getTrackingResponse(rgist)
                .map(response -> "Y".equals(response.getHeader().getSuccessYN()) ?
                        Result.success(response.getTrackInfo()) :
                        Result.<TrackInfo>fail(response.getHeader().getErrorMessage()))
                .doOnError(Throwable::printStackTrace)
                .onErrorReturn(Result.fail("데이터를 불러오는데 실패하였습니다."));
    }

    private Mono<TrackingResponse> getTrackingResponse(String rgist) {
        ReactiveValueOperations<String, TrackingResponse> valueOps = redis.opsForValue();
        return valueOps.get(rgist)
                .switchIfEmpty(callTrackingApi(rgist)
                        .flatMap(response -> valueOps.set(rgist, new TrackingResponse(), Duration.ofMinutes(1))
                                .thenReturn(response)));
    }

    private Mono<TrackingResponse> callTrackingApi(String rgist) {
        return webClient
                .get().uri(uriBuilder -> uriBuilder
                        .queryParam("rgist", rgist)
                        .build())
                .retrieve().bodyToMono(TrackingResponse.class);
    }
}
