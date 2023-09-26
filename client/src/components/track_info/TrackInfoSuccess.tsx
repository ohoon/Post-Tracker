import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { InfoCircle } from "react-bootstrap-icons";

import { useAppDispatch } from '../../app/hooks';
import {
    TrackInfoState,
    getTrackInfo,
    remove,
} from '../../features/track_info/trackInfoSlice';

import { DetailedTrackInfo } from "./DetailedTrackInfo";

interface TrackInfoProps {
    regiNo: string;
    trackInfo: TrackInfoState;
}

export function TrackInfoSuccess({ regiNo, trackInfo }: TrackInfoProps) {
    const dispatch = useAppDispatch();
    const [show, setShow] = useState(false);

    const showDetails = () => setShow(true);
    const hideDetails = () => setShow(false);

    return (
        <div
            className="info-box row my-1"
        >
            <Card
                id={regiNo}
                bg="success"
                text="light"
                onClick={showDetails}
            >
                <Card.Body
                    className="row"
                >
                    <div
                        className="col-2"
                    >
                        <div
                            className="row"
                        >
                            <small
                                className="text-muted"
                            >
                                등기번호
                            </small>
                        </div>
                        <div
                            className="row"
                        >
                            <small>
                                {regiNo}
                            </small>
                        </div>
                    </div>
                    <div
                        className="col-3"
                    >
                        <div
                            className="row"
                        >
                            <small
                                className="text-muted"
                            >
                                보낸이
                            </small>
                        </div>
                        <div
                            className="row"
                        >
                            <span>
                                {trackInfo.senderName}
                            </span>
                        </div>
                    </div>
                    <div
                        className="col-1"
                    >
                        →
                    </div>
                    <div
                        className="col-3"
                    >
                        <div
                            className="row"
                        >
                            <small
                                className="text-muted"
                            >
                                받는이
                            </small>
                        </div>
                        <div
                            className="row"
                        >
                            <span>
                                {trackInfo.receiveName}
                            </span>
                        </div>
                    </div>
                    <div
                        className="col"
                    >
                        <span>
                            {trackInfo.trackState}
                        </span>
                    </div>
                    <div
                        className="col-1"
                    >
                        <InfoCircle
                            width="25%"
                            height="25%"
                        />
                    </div>
                </Card.Body>
            </Card>

            <Modal
                size="lg"
                show={show}
                onHide={hideDetails}
            >
                <Modal.Header
                    closeButton
                >
                    <Modal.Title>
                        배송 진행상황
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailedTrackInfo
                        regiNo={regiNo}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        onClick={() => dispatch(getTrackInfo(regiNo))}
                    >
                        갱신하기
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            hideDetails();
                            dispatch(remove(regiNo));
                        }}
                    >
                        삭제
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
