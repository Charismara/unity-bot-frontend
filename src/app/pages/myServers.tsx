import {Card, Row} from "antd";
import {useGetUserGuildsQuery} from "../reducer/backendApi";
import {LoadingSpinner} from "../components/loading/LoadingSpinner";
import {ColumnType} from "antd/es/table";
import {IDiscordGuild} from "../reducer/backendApiModels";
import {Trans} from "react-i18next";
import {GuildComponent} from "../components/misc/GuildComponent";

export function MyServers() {
    const discordGuilds = useGetUserGuildsQuery();
    if (!discordGuilds.isSuccess) {
        if (discordGuilds.isError) {
            console.log("ERROR on loading Guilds: ", discordGuilds.error);
        }
        return <LoadingSpinner/>
    }

    const cols: ColumnType<IDiscordGuild>[] = [
        {
            title: <Trans i18nKey={"discord.guild.name"}/>,
            dataIndex: 'name',
            key: 'name',
            sorter: true
        }
    ]

    return (
        <Row>
            {discordGuilds.data.filter(guild => Number(Number(guild.permissions) & 0x20) === 0x20).map(guild => {
                return (<GuildComponent guild={guild}/>)
            })}
        </Row>
    )
}