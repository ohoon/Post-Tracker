import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAppDispatch } from '../../app/hooks';
import {
    getTrackInfo,
} from '../../features/track_info/trackInfoSlice';

export function InputRange() {
    const dispatch = useAppDispatch();
    const [rgistFrom, setRgistFrom] = useState("");
    const [rgistTo, setRgistTo] = useState("");

    return (
        <div
            className="my-3"
        >
            <InputGroup>
                <Form.Control
                    placeholder="등기 시작번호"
                    aria-label="등기 시작번호"
                    value={rgistFrom}
                    onChange={(e) => setRgistFrom(e.target.value)}
                />
                <span>
                    ~
                </span>
                <Form.Control
                    placeholder="등기 끝번호"
                    aria-label="등기 끝번호"
                    value={rgistTo}
                    onChange={(e) => setRgistTo(e.target.value)}
                />
                <Button
                    variant="outline-secondary"
                    onClick={() => {
                        const from = parseInt(rgistFrom);
                        const to = parseInt(rgistTo);
                        if (isNaN(from) || isNaN(to)) {
                            return alert("국내 우편만 가능한 서비스입니다");
                        }

                        if (from > to) {
                            return alert("범위 입력값이 올바르지 않습니다");
                        }

                        if (to - from > 100) {
                            return alert("한번에 100건을 초과하여 조회할 수 없습니다")
                        }

                        for (let rgist = from; rgist <= to; rgist++) {
                            dispatch(getTrackInfo(rgist.toString()));
                        }
                    }}
                >
                    조회
                </Button>
            </InputGroup>
        </div>
    );
}
