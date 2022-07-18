import {Trans} from "react-i18next";
import {Row} from "antd";

interface Properties {
    langKey: string
}

export function Title(properties: Properties) {
    return (
        <Row style={{fontSize: "2.5rem", width: "100%"}} justify={"center"} align={"middle"}>
            <Trans i18nKey={properties.langKey}/>
        </Row>
    )
}