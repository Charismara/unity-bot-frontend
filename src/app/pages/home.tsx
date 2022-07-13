import {Card, Row} from "antd";
import Meta from "antd/es/card/Meta";
import {Trans} from "react-i18next";

export function Home() {
    return (
        <Row>
            <Row style={{width:"100%"}}>Features</Row>
            <Row justify={"space-around"}>
                <Card bordered={false} style={{width: 240, margin: "5px"}} hoverable={true}>
                    <Meta title={<Trans i18nKey={"random.generator"}/>} description={"A simple random generator."}/>
                </Card>
            </Row>
        </Row>
    );
}