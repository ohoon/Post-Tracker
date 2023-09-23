import React from 'react';

import {
    TrackInfoState,
} from '../../features/track_info/trackInfoSlice';

interface TrackInfoProps {
    regiNo: string;
    trackInfo: TrackInfoState;
}

export function TrackInfoSuccess({ regiNo, trackInfo }: TrackInfoProps) {
    return (
        <div id={regiNo} className="row">
            <>
                보낸이: {trackInfo.senderName}, 보낸날짜: {trackInfo.senderDate},
                상태: {trackInfo.trackState},
                받는이: {trackInfo.receiveName}, 받은날짜: {trackInfo.receiveDate}
            </>
        </div>
    );
}
