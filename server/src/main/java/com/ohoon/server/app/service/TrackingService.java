package com.ohoon.server.app.service;

import com.ohoon.server.app.dto.Result;
import com.ohoon.server.app.dto.TrackingResponse;
import com.ohoon.server.app.dto.TrackingResponse.TrackInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TrackingService {

    private final WebClient webClient;

    public Mono<Result<TrackInfo>> track(String rgist) {
        return webClient
                .get().uri(uriBuilder -> uriBuilder
                        .queryParam("rgist", rgist)
                        .build())
                .retrieve().bodyToMono(TrackingResponse.class)
                .map(response ->
                        "Y".equals(response.getHeader().getSuccessYN()) ?
                                Result.success(response.getTrackInfo()) :
                                Result.<TrackInfo>fail(response.getHeader().getErrorMessage()))
                .onErrorReturn(Result.fail("데이터를 불러오는데 실패하였습니다."));
    }
}
