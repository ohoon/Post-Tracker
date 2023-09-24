import React from 'react';
import Card from 'react-bootstrap/Card';

import {
    TrackInfoState,
} from '../../features/track_info/trackInfoSlice';

interface TrackInfoProps {
    regiNo: string;
    trackInfo: TrackInfoState;
}

export function TrackInfoSuccess({ regiNo, trackInfo }: TrackInfoProps) {
    return (
        <div
            className="info-box row my-1"
        >
            <Card
                id={regiNo}
                bg="success"
                text="light"
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
                </Card.Body>
            </Card>
        </div>
    );
}
