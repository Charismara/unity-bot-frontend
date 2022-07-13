import {useGetProfileQuery} from "../../reducer/backendApi";
import {Col, Dropdown, Image, Menu, Row} from "antd";
import {LoadingSpinner} from "../loading/LoadingSpinner";
import {LoginButton} from "./LoginButton";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Trans} from "react-i18next";

export function ProfileComponent() {
    const profile = useGetProfileQuery({});
    const [imgFormat, setImgFormat] = useState<'.gif' | '.png'>(".gif");

    if (profile.isLoading) {
        return (
            <Row>
                <LoadingSpinner/>
            </Row>
        )
    }

    if (profile.isError) {
        console.log("Login Error: ", profile.error);
        return (
            <LoginButton/>
        )
    }

    return (
        <Row>
            <>
                <Dropdown overlay={() => {
                    return <Menu theme={"dark"} items={[
                        {
                            key: 'logout',
                            label: (<Link to={"/logout"}><Trans i18nKey={"logout"}/></Link>)
                        }
                    ]}/>
                }} placement={"bottom"}>
                    <Row>
                        <Col><Image src={profile.data!.imageUrl as string + imgFormat} width={"2rem"} height={"2rem"}
                                    loading={"lazy"} onError={e => {
                                        setImgFormat(".png");
                        }}/></Col><Col>{profile.data!.name}</Col>
                    </Row>
                </Dropdown>
            </>
        </Row>
    )
}