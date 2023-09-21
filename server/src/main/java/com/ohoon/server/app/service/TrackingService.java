package com.ohoon.server.app.service;

import com.ohoon.server.app.dto.TrackingResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TrackingService {

    private final WebClient webClient;

    public Mono<TrackingResponse> track(String rgist) {
        return webClient
                .get().uri(uriBuilder -> uriBuilder
                        .queryParam("rgist", rgist)
                        .build())
                .retrieve().bodyToMono(TrackingResponse.class);
    }
}
