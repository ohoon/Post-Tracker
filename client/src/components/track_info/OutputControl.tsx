import React from 'react';
import { Trash } from "react-bootstrap-icons";

import { useAppDispatch } from '../../app/hooks';
import { clear } from "../../features/track_info/trackInfoSlice";

export function OutputControl() {
    const dispatch = useAppDispatch();
    return (
        <div
            className="my-3 px-4"
            style={{ width: '80%' }}
        >
            <Trash
                className="float-end"
                onClick={() => dispatch(clear())}
            />
        </div>
    );
}
