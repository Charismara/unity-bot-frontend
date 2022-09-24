import {Card, Row} from "antd";
import Meta from "antd/es/card/Meta";
import {Trans} from "react-i18next";

export function Home() {
    return (
        <Row>
            <Card title={<Row style={{fontSize: "2.5rem", width: "100%"}} justify={"center"} align={"middle"}><Trans
                i18nKey={"home.features"}/></Row>} bordered={false} style={{backgroundColor: "#36393e", width: "100%"}}>
                <Row justify={"space-around"}>
                    <Card bordered={false} style={{width: 280, margin: "5px"}} hoverable={true}>
                        <Meta title={<Trans i18nKey={"dnd.history"}/>} description={<Trans i18nKey="dnd.history.desc"/>}/>
                    </Card>
                </Row>
            </Card>
            <Card title={<Row style={{fontSize: "2.5rem", width: "100%"}} justify={"center"} align={"middle"}><Trans
                i18nKey={"home.features.experimental"}/></Row>} bordered={false}
                  style={{backgroundColor: "#36393e", width: "100%"}}>
                <Row justify={"space-around"}>
                    <span>None...</span>
                </Row>
            </Card>
            <Card title={<Row style={{fontSize: "2.5rem", width: "100%"}} justify={"center"} align={"middle"}><Trans
                i18nKey={"home.features.planned"}/></Row>} bordered={false}
                  style={{backgroundColor: "#36393e", width: "100%"}}>
                <Row justify={"space-around"}>
                    <Card bordered={false} style={{width: 240, margin: "5px"}} hoverable={true}>
                        <Meta title={<Trans i18nKey={"random.generator"}/>} description={"A simple random generator."}/>
                    </Card>
                    <Card bordered={false} style={{width: 240, margin: "5px"}} hoverable={true}>
                        <Meta title={<Trans i18nKey={"features.embedded.messages"}/>}
                              description={"Online editor to create, schedule and post Discord Messages."}/>
                    </Card>
                    <Card bordered={false} style={{width: 240, margin: "5px"}} hoverable={true}>
                        <Meta title={<Trans i18nKey={"features.reaction.roles"}/>}
                              description={"Online Management Tool for reaction based role assignment"}/>
                    </Card>
                    <Card bordered={false} style={{width: 240, margin: "5px"}} hoverable={true}>
                        <Meta title={<Trans i18nKey={"features.statistics"}/>}
                              description={"Statistics Channel + Statistics Panel"}/>
                    </Card>
                </Row>
            </Card>
        </Row>
    );
}