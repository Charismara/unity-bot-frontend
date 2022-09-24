import {IDiscordGuild} from "../../reducer/backendApiModels";
import {Card} from "antd";
import {useGetUserGuildQuery} from "../../reducer/backendApi";

interface Properties {
    guild: IDiscordGuild
}

export function GuildComponent(properties: Properties) {
    const guild = useGetUserGuildQuery({guild_id: properties.guild.id});
    if (!guild.isSuccess) {
        if (guild.isError) {
            console.log("Error on loading Guild for Component:", properties.guild);
        }
        return (<div style={{display: "none"}}/>)
    }

    return (
        <Card hoverable style={{width: "280px"}} cover={<img alt={"guild_icon"}
                                                             src={`https://cdn.discordapp.com/icons/${guild.data.id}/${guild.data.splash}.png`}/>}>

        </Card>
    )
}