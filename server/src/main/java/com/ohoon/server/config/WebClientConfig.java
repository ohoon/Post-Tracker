package com.ohoon.server.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.codec.xml.Jaxb2XmlDecoder;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import static org.springframework.web.util.DefaultUriBuilderFactory.*;

@Configuration
@RequiredArgsConstructor
public class WebClientConfig {

    private final Environment environment;

    @Bean
    public WebClient webClient() {
        String baseUrl = environment.getProperty("BASE_URL", "");
        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory(baseUrl);
        factory.setEncodingMode(EncodingMode.VALUES_ONLY);
        return WebClient
                .builder()
                .uriBuilderFactory(factory)
                .exchangeStrategies(
                        ExchangeStrategies.builder()
                                .codecs(configurer -> configurer
                                        .defaultCodecs()
                                        .jaxb2Decoder(new Jaxb2XmlDecoder()))
                                .build()
                )
                .build();
    }
}
