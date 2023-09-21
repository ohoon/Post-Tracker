package com.ohoon.server.app.handler;

import com.ohoon.server.app.annotation.Handler;
import com.ohoon.server.app.dto.Result;
import com.ohoon.server.app.dto.TrackingResponse.TrackInfo;
import com.ohoon.server.app.service.TrackingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Handler
@RequiredArgsConstructor
public class TrackingHandler {

    private final TrackingService trackingService;

    public Mono<ServerResponse> track(ServerRequest request) {
        String rgist = request.pathVariable("rgist");
        Mono<Result<TrackInfo>> result = trackingService.track(rgist);
        return ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(result, Result.class);
    }
}
