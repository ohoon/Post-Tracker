import React from 'react';
import Table from 'react-bootstrap/Table';

import { useAppSelector } from '../../app/hooks';
import {
    selectTrackInfoDict,
} from '../../features/track_info/trackInfoSlice';

interface TrackInfoProps {
    regiNo: string;
}

export function DetailedTrackInfo({ regiNo }: TrackInfoProps) {
    const trackInfoDict = useAppSelector(selectTrackInfoDict);
    const detailedTrackList = trackInfoDict[regiNo]?.detailedTrackList;

    return (
        <Table
            id={regiNo}
            className="my-3"
            striped
            bordered
            hover
        >
            <thead>
                <tr>
                    <th>#</th>
                    <th>날짜</th>
                    <th>시간</th>
                    <th>발생국</th>
                    <th>처리현황</th>
                </tr>
            </thead>
            <tbody>
            {detailedTrackList?.map(detailedTrackInfo => (
                <tr>
                    <td>{detailedTrackInfo.sortNo}</td>
                    <td>{detailedTrackInfo.date.toString()}</td>
                    <td>{detailedTrackInfo.time.toString()}</td>
                    <td>{detailedTrackInfo.location}</td>
                    <td>{detailedTrackInfo.status}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
