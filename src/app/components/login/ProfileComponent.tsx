import {useGetProfileQuery} from "../../reducer/backendApi";
import {Col, Dropdown, Image, Menu, Row} from "antd";
import {LoadingSpinner} from "../loading/LoadingSpinner";
import {LoginButton} from "./LoginButton";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Trans} from "react-i18next";
import {ItemType} from "antd/es/menu/hooks/useItems";
import {hasPermission} from "../../api/apiUtils";

export function ProfileComponent() {
    const profile = useGetProfileQuery();
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

    const items: ItemType[] = [
        {
            key: 'my-bots',
            label: (<Link to={"/discord/servers"}><Trans i18nKey={"my.discord.servers"}/></Link>)
        }
    ];


    if (hasPermission("USER_ROLE_MANAGEMENT", profile.data!)) {
        items.push({
            key: 'user-management',
            label: (<Link to={"/admin/users"}><Trans i18nKey={"admin.management.users"}/></Link>)
        });
    }

    if (hasPermission("DISCORD_BOT_ADMIN", profile.data!)) {
        items.push({
            key: 'discord-bot-management',
            label: (<Link to={"/admin/discord/bots"}><Trans i18nKey={"admin.discord.bots"}/></Link>)
        });
    }

    items.push(
        {
            key: 'logout',
            label: (<Link to={"/logout"}><Trans i18nKey={"logout"}/></Link>)
        }
    );

    return (
        <Row>
            <>
                <Dropdown overlay={() => {
                    return <Menu theme={"dark"} items={items}/>
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