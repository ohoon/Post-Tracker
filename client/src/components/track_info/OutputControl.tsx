import React from 'react';
import { ArrowClockwise, Trash } from "react-bootstrap-icons";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    selectTrackInfoDict,
    clear, getTrackInfo
} from "../../features/track_info/trackInfoSlice";

export function OutputControl() {
    const trackInfoDict = useAppSelector(selectTrackInfoDict);
    const dispatch = useAppDispatch();
    return (
        <div
            className="my-3 px-4"
            style={{ width: '80%' }}
        >
            <div
                className="float-end"
            >
                <ArrowClockwise
                    className="mx-1"
                    onClick={() => Object.keys(trackInfoDict)
                        .forEach(regiNo => dispatch(getTrackInfo(regiNo)))}
                />
                <Trash
                    className="mx-1"
                    onClick={() => dispatch(clear())}
                />
            </div>
        </div>
    );
}
