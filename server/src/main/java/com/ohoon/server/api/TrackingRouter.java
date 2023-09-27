package com.ohoon.server.api;

import com.ohoon.server.app.handler.TrackingHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Configuration
@RequiredArgsConstructor
public class TrackingRouter {

    private final TrackingHandler trackingHandler;

    @Bean
    public RouterFunction<ServerResponse> tracking() {
        return route()
                .path("/api", front -> front
                        .path("/tracking", builder -> builder
                                .GET("/{rgist}", trackingHandler::track)
                        )
                )
                .build();
    }
}
