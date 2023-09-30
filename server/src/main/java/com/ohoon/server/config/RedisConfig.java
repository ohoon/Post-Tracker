package com.ohoon.server.config;

import com.ohoon.server.app.dto.TrackingResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.ReactiveRedisConnectionFactory;
import org.springframework.data.redis.core.ReactiveRedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.data.redis.serializer.*;

@Configuration
@EnableRedisRepositories
public class RedisConfig {

    @Bean
    public ReactiveRedisTemplate<String, TrackingResponse> reactiveRedisTemplate(ReactiveRedisConnectionFactory reactiveRedisConnectionFactory) {
        RedisSerializationContext<String, TrackingResponse> context =
                RedisSerializationContext.<String, TrackingResponse>newSerializationContext(new StringRedisSerializer())
                        .value(new Jackson2JsonRedisSerializer<>(TrackingResponse.class))
                        .build();
        return new ReactiveRedisTemplate<>(reactiveRedisConnectionFactory, context);
    }
}
