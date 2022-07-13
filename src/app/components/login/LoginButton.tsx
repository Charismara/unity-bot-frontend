import {Col, Row} from "antd";
import {Trans} from "react-i18next";
import {DiscordLogo} from "../svg/DiscordLogo";
import {useNavigate} from "react-router-dom";
import {environment} from "../../environment";


export function LoginButton() {
    const navigate = useNavigate();

    return (
        <Row style={{paddingTop: "1rem"}}>
            <a href={environment.discordAuthUrl} style={{color: "white"}}>
                <Row justify={"center"} align={"middle"} className={"login-button"}>
                    <Col>
                        <Row justify={"center"} align={"middle"}>
                            <DiscordLogo style={{width: "2rem", height: "2rem"}}/>
                        </Row>
                    </Col>
                    <Col style={{marginLeft: "0.5rem"}}>
                        <Row><span style={{fontSize: "1.2rem", lineHeight: "1.2rem"}}><Trans
                            i18nKey={"login.with.discord"}/></span></Row>
                    </Col>
                </Row>
            </a>
        </Row>
    )
}