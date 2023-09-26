import React from 'react';
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { InputSingle } from "./InputSingle";
import { InputRange } from "./InputRange";
import { InputFile } from "./InputFile";

export function Input() {
    return (
        <Card
            className="row my-3"
            style={{ width: '60%' }}
        >
            <Card.Body>
                <Tabs
                    defaultActiveKey="single"
                >
                    <Tab
                        eventKey="single"
                        title="단건조회"
                    >
                        <InputSingle />
                    </Tab>
                    <Tab
                        eventKey="range"
                        title="범위조회"
                    >
                        <InputRange />
                    </Tab>
                    <Tab
                        eventKey="file"
                        title="파일조회"
                    >
                        <InputFile />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}
