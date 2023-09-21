package com.ohoon.server.app.dto;

import jakarta.xml.bind.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@XmlRootElement(name = "response")
@XmlAccessorType(XmlAccessType.FIELD)
public class TrackingResponse {

    @XmlElement
    private Header header;

    @XmlElement(nillable = true)
    private TrackInfo trackInfo;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @XmlRootElement
    @XmlAccessorType(XmlAccessType.FIELD)
    public static class Header {

        @XmlElement
        private String requestRegiNo;

        @XmlElement
        private String responseTime;

        @XmlElement
        private String successYN;

        @XmlElement
        private String errorMessage;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @XmlRootElement
    @XmlAccessorType(XmlAccessType.FIELD)
    public static class TrackInfo {

        @XmlElement
        private String regiNo;

        @XmlElement
        private String senderName;

        @XmlElement(name = "senderData")
        private String senderDate;

        @XmlElement
        private String receiveName;

        @XmlElement
        private String receiveDate;

        @XmlElement
        private String trackState;

        @XmlElement
        private String expressType;

        @XmlElement(name = "detaileTrackList")
        private List<DetailedTrackInfo> detailedTrackList;

        @Data
        @AllArgsConstructor
        @NoArgsConstructor
        @XmlRootElement
        @XmlAccessorType(XmlAccessType.FIELD)
        private static class DetailedTrackInfo {

            @XmlElement
            private String sortNo;

            @XmlElement
            private String date;

            @XmlElement
            private String time;

            @XmlElement(name = "statue")
            private String status;

            @XmlElement
            private String location;

            @XmlElement
            private String remark;
        }
    }
}
