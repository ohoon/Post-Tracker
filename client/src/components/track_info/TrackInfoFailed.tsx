import React from 'react';
import Card from "react-bootstrap/Card";
import { ArrowClockwise } from "react-bootstrap-icons";

import { useAppDispatch } from "../../app/hooks";
import {
    TrackInfoState,
    getTrackInfo,
} from '../../features/track_info/trackInfoSlice';

interface TrackInfoProps {
    regiNo: string;
    trackInfo: TrackInfoState;
}

export function TrackInfoFailed({ regiNo, trackInfo }: TrackInfoProps) {
    const dispatch = useAppDispatch();

    return (
        <div
            className="info-box row my-1"
        >
            <Card
                id={regiNo}
                bg="danger"
                text="light"
                onClick={() => dispatch(getTrackInfo(regiNo))}
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
                        className="col"
                    >
                        <span>
                            {trackInfo.message}
                        </span>
                    </div>
                    <div
                        className="col-1"
                    >
                        <ArrowClockwise
                            width="30%"
                            height="30%"
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
