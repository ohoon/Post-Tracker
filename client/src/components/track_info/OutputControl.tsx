import React from 'react';
import {ArrowClockwise, Download, Trash} from "react-bootstrap-icons";

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {clear, getTrackInfo, selectTrackInfoDict} from "../../features/track_info/trackInfoSlice";

export function OutputControl() {
    const trackInfoDict = useAppSelector(selectTrackInfoDict);
    const dispatch = useAppDispatch();

    const downloadCSV = () => {
        let data = "등기번호,보낸이,보낸날짜,받는이,받은날짜,배송상황\r\n";
        Object.entries(trackInfoDict)
            .forEach(([regiNo, { senderName, senderDate, receiveName, receiveDate, trackState, message }]) =>
                data += regiNo
                    + "," + (senderName || "") + "," + (senderDate?.toString() || "")
                    + ',' + (receiveName || "") + "," + (receiveDate?.toString() || "")
                    + "," + (message || trackState) + "\r\n");

        const link = document.createElement("a");
        const blob = new Blob(["\uFEFF" + data], { type: "text/csv;charset=utf-8" });
        link.href = URL.createObjectURL(blob);
        link.download = "Post Tracker - " + Date() + ".csv";
        link.click();
    };

    return (
        <div
            className="output-control my-3 px-4"
            style={{ width: '80%' }}
        >
            <div
                className="float-end"
            >
                <Download
                    className="mx-2"
                    onClick={downloadCSV}
                />
                <ArrowClockwise
                    className="mx-2"
                    onClick={() => Object.keys(trackInfoDict)
                        .forEach(regiNo => dispatch(getTrackInfo(regiNo)))}
                />
                <Trash
                    className="mx-2"
                    onClick={() => dispatch(clear())}
                />
            </div>
        </div>
    );
}
