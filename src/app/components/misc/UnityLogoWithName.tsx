import {UnityBotLogo} from "../svg/UnityBotLogo";
import {Row} from "antd";
import React from "react";
import {Link} from "react-router-dom";

export function UnityLogoWithName(){
    return(
        <Link to={"/"}>
            <Row>
                <UnityBotLogo style={{"width": "3rem", "height": "3rem", "marginTop": "0.5rem"}}/>
                <span style={{gridColumn: "2", gridRow: "1", color: "#fff", fontSize: "3rem",}}>Unity Bot</span>
            </Row>
        </Link>
    );
}