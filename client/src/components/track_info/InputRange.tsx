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
    const [rgistFrom, setRgistFrom] = useState<number>();
    const [rgistTo, setRgistTo] = useState<number>();

    return (
        <div
            className="my-3"
        >
            <InputGroup>
                <Form.Control
                    placeholder="등기 시작번호"
                    aria-label="등기 시작번호"
                    value={rgistFrom}
                    onChange={(e) => setRgistFrom(parseInt(e.target.value))}
                />
                <Form.Text
                    className="mx-1"
                >
                    ~
                </Form.Text>
                <Form.Control
                    placeholder="등기 끝번호"
                    aria-label="등기 끝번호"
                    value={rgistTo}
                    onChange={(e) => setRgistTo(parseInt(e.target.value))}
                />
                <Button
                    variant="outline-secondary"
                    onClick={() => {
                        if (rgistFrom === undefined || rgistTo === undefined) {
                            return alert("범위를 입력해 주세요");
                        }

                        if (isNaN(rgistFrom) || isNaN(rgistTo)) {
                            return alert("국내 우편만 가능한 서비스입니다");
                        }

                        if (rgistFrom > rgistTo) {
                            return alert("범위 입력값이 올바르지 않습니다");
                        }

                        if (rgistTo - rgistFrom >= 100) {
                            return alert("한번에 100건을 초과하여 조회할 수 없습니다")
                        }

                        for (let rgist = rgistFrom; rgist <= rgistTo; rgist++) {
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
