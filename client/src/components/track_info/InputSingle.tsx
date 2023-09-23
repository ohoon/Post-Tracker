import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';

import { useAppDispatch } from '../../app/hooks';
import {
    getTrackInfo,
    clear
} from '../../features/track_info/trackInfoSlice';

export function InputSingle() {
    const dispatch = useAppDispatch();
    const [rgist, setRgist] = useState("");

    return (
        <div>
            <InputGroup>
                <input
                    aria-label="등기 번호 13자리를 입력해주세요"
                    value={rgist}
                    onChange={(e) => setRgist(e.target.value)}
                />
                <button
                    onClick={() => dispatch(getTrackInfo(rgist))}
                >
                    조회
                </button>
                <button
                    onClick={() => dispatch(clear())}
                >
                    초기화
                </button>
            </InputGroup>
        </div>
    );
}
