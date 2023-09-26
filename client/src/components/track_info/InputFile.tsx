import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { useAppDispatch } from '../../app/hooks';
import {
    getTrackInfo,
} from '../../features/track_info/trackInfoSlice';

export function InputFile() {
    const dispatch = useAppDispatch();
    const [textMatrix, setTextMatrix] = useState<string[][]>();
    const [colNum, setColNum] = useState<number>();
    const [rowFrom, setRowFrom] = useState<number>();
    const [rowTo, setRowTo] = useState<number>();

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const fileReader = new FileReader();
            fileReader.readAsText(e.target.files[0], 'EUC-KR');
            fileReader.onloadend = (e: ProgressEvent<FileReader>) => {
                e?.target?.result &&
                    setTextMatrix(e.target.result.toString()
                        .split('\r\n')
                        .filter(row => row.length > 0)
                        .map(row => row.split(',')));
            }
        } else {
            setTextMatrix(undefined);
        }
    };

    return (
        <div
            className="my-3"
        >
            <Form.Group
                controlId="formFile"
                className="my-3"
            >
                <Form.Label>
                    .csv file
                </Form.Label>
                <Form.Control
                    type="file"
                    onChange={handleFile}
                />
            </Form.Group>
            {textMatrix &&
                <InputGroup
                    className="my-3"
                >
                    <Form.Select
                        className="me-3"
                        aria-label="열 선택"
                        onChange={e => setColNum(parseInt(e.target.value))}
                    >
                        <option selected disabled hidden>열 선택</option>
                        {textMatrix
                            && textMatrix[0]?.map((text, index) =>
                                <option
                                    value={index}
                                >
                                    {text}
                                </option>
                        )}
                    </Form.Select>
                    <Form.Select
                        aria-label="시작 행 선택"
                        onChange={e => setRowFrom(parseInt(e.target.value))}
                    >
                        <option selected disabled hidden>시작 행 선택</option>
                        {textMatrix && textMatrix.length > 0 && colNum !== undefined && colNum < textMatrix[0].length
                            && textMatrix
                                .map((textArr, index) =>
                                    <option
                                        value={index}
                                    >
                                        {textArr[colNum]}
                                    </option>
                        )}
                    </Form.Select>
                    <Form.Text
                        className="mx-1"
                    >
                        ~
                    </Form.Text>
                    <Form.Select
                        aria-label="끝 행 선택"
                        onChange={e => setRowTo(parseInt(e.target.value))}
                    >
                        <option selected disabled hidden>끝 행 선택</option>
                        {textMatrix && textMatrix.length > 0 && colNum !== undefined && colNum < textMatrix[0].length
                            && rowFrom !== undefined
                            && textMatrix
                                .slice(rowFrom)
                                .map((textArr, index) =>
                                    <option
                                        value={rowFrom + index}
                                    >
                                        {textArr[colNum]}
                                    </option>
                        )}
                    </Form.Select>
                    <Button
                        variant="outline-secondary"
                        onClick={() => {
                            if (textMatrix === undefined) {
                                return alert("파일을 입력해 주세요");
                            }

                            if (colNum === undefined || rowFrom === undefined || rowTo === undefined) {
                                return alert("범위를 입력해 주세요");
                            }

                            if (rowFrom > rowTo) {
                                return alert("범위 입력값이 올바르지 않습니다");
                            }

                            if (rowTo - rowFrom >= 100) {
                                return alert("한번에 100건을 초과하여 조회할 수 없습니다")
                            }

                            for (let rowNum = rowFrom; rowNum <= rowTo; rowNum++) {
                                dispatch(getTrackInfo(textMatrix[rowNum][colNum]));
                            }
                        }}
                    >
                        조회
                    </Button>
                </InputGroup>
            }
        </div>
    );
}
