import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAppDispatch } from '../../app/hooks';
import {
    getTrackInfo,
} from '../../features/track_info/trackInfoSlice';

export function InputSingle() {
    const dispatch = useAppDispatch();
    const [rgist, setRgist] = useState("");

    return (
        <div
            className="my-3"
        >
            <InputGroup>
                <Form.Control
                    placeholder="등기 번호 13자리를 입력해주세요"
                    aria-label="등기 번호 13자리를 입력해주세요"
                    value={rgist}
                    onChange={(e) => setRgist(e.target.value)}
                />
                <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(getTrackInfo(rgist))}
                >
                    조회
                </Button>
            </InputGroup>
        </div>
    );
}
