import React from 'react';

import {
    TrackInfoState,
} from '../../features/track_info/trackInfoSlice';

interface TrackInfoProps {
    regiNo: string;
    trackInfo: TrackInfoState;
}

export function TrackInfoFailed({ regiNo, trackInfo }: TrackInfoProps) {
    return (
        <div id={regiNo} className="row failed">
            <>
                {trackInfo.message}
            </>
        </div>
    );
}
