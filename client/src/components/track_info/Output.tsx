import React from 'react';

import { useAppSelector } from '../../app/hooks';
import {
    selectTrackInfoDict,
} from '../../features/track_info/trackInfoSlice';
import {TrackInfoSuccess} from "./TrackInfoSuccess";
import {TrackInfoLoading} from "./TrackInfoLoading";
import {TrackInfoFailed} from "./TrackInfoFailed";

export function Output() {
    const trackInfoDict = useAppSelector(selectTrackInfoDict);

    return (
        <>
            {Object.entries(trackInfoDict).map(([regiNo, trackInfo]) =>
                trackInfo.status === 'loading' ? <TrackInfoLoading regiNo={regiNo} /> :
                    trackInfo.status === 'failed' ? <TrackInfoFailed regiNo={regiNo} trackInfo={trackInfo} /> :
                        <TrackInfoSuccess regiNo={regiNo} trackInfo={trackInfo} />
            )}
        </>
    );
}
