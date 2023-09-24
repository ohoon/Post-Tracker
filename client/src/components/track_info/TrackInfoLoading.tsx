import React from 'react';
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

interface TrackInfoProps {
    regiNo: string;
}

export function TrackInfoLoading({ regiNo }: TrackInfoProps) {
    return (
        <div
            className="info-box row my-1"
        >
            <Card
                id={regiNo}
                bg="secondary"
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
                        className="col"
                    >
                        <Spinner
                            animation="border"
                            role="status"
                        >
                        <span
                            className="visually-hidden"
                        >
                            Loading...
                        </span>
                        </Spinner>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
