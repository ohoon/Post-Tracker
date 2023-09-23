import React from 'react';

interface TrackInfoProps {
    regiNo: string;
}

export function TrackInfoLoading({ regiNo }: TrackInfoProps) {
    return (
        <div id={regiNo} className="row loading">
            <>
                <span></span>
                <span></span>
                <span></span>
            </>
        </div>
    );
}
