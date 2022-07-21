import {
    useCreateDiscordBotMutation, useDeleteDiscordBotAdminMutation,
    useGetDiscordBotsAdminQuery, useGetUserGuildsQuery,
    useStartDiscordBotMutation, useStopDiscordBotMutation
} from "../reducer/backendApi";
import {Button, Card, Form, Input, Modal, Row, Space, Table} from "antd";
import {Trans} from "react-i18next";
import {IDiscordBot} from "../reducer/backendApiModels";
import {ColumnType} from "antd/es/table";
import {PlusCircleOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useForm} from "antd/es/form/Form";
import {LoadingSpinner} from "../components/loading/LoadingSpinner";

interface Properties {
    adminMode?: boolean
}

export function DiscordBotManagement(properties: Properties) {
    const knownBots = useGetDiscordBotsAdminQuery();
    const userGuilds = useGetUserGuildsQuery();
    const [createBot, resultCreateBot] = useCreateDiscordBotMutation();
    const [startBot, resultStartBot] = useStartDiscordBotMutation();
    const [stopBot, resultStopBot] = useStopDiscordBotMutation();
    const [deleteBot, resultDeleteBot] = useDeleteDiscordBotAdminMutation();
    const [createBotModalShown, setCreateBotModalShown] = useState<boolean>(false);
    const [openBotInviteModals, setOpenBotInviteModals] = useState<number[]>([]);
    const [form] = useForm();

    if (!userGuilds.isSuccess) {
        if (userGuilds.isError) {
            console.log(userGuilds.error);
        }
        return <LoadingSpinner/>
    }

    const cols: ColumnType<IDiscordBot>[] = [
        {
            title: <Trans i18nKey={"discord.bot.name"}/>,
            dataIndex: 'name',
            key: 'name',
            sorter: true
        },
        {
            title: <Trans i18nKey={"discord.bot.token"}/>,
            dataIndex: 'token',
            key: 'token',
            sorter: true
        },
        {
            title: <Trans i18nKey={"discord.bot.running"}/>,
            key: 'running',
            sorter: true,
            render: bot => (
                <>{bot.running ? <Trans i18nKey={"discord.bot.online"}/> : <Trans i18nKey={"discord.bot.offline"}/>}</>
            )
        },
        {
            title: <Trans i18nKey={"discord.bot.actions"}/>,
            key: 'actions',
            sorter: false,
            render: (bot: IDiscordBot) => (
                <Space>
                    <Button disabled={bot.running} onClick={event => startBot({data: bot})}>Start</Button>
                    <Button disabled={!bot.running} onClick={event => stopBot({data: bot})}>Stop</Button>
                    <Button onClick={event => deleteBot({data: bot})}>Delete</Button>
                    <Button onClick={event => {
                        const activeModals = [...openBotInviteModals];
                        activeModals.push(bot.id);
                        setOpenBotInviteModals(activeModals);
                    }}>Invite Bot</Button>
                    <Modal visible={openBotInviteModals.some(value => value === bot.id)}
                           title={<Trans i18nKey={"discord.bot.invite.title"} values={{name: bot.name}}/>}
                           onCancel={e => {
                               setOpenBotInviteModals(openBotInviteModals.filter(value => value !== bot.id));
                           }}
                    >
                        {userGuilds.data!.map(guild => {
                            return (
                                <Card>
                                    <a target={"_blank"} rel={"noreferrer"}
                                       href={`https://discord.com/oauth2/authorize?scope=bot+applications.commands&permissions=1945627743&client_id=${bot.applicationId}&guild_id=${guild.id}`}>{guild.name}</a>
                                </Card>
                            )
                        })}
                    </Modal>
                </Space>
            )
        }
    ]

    return (
        <Row style={{width: "100%"}}>
            <Table dataSource={knownBots.data} loading={!knownBots.isSuccess && !userGuilds.isSuccess} columns={cols}
                   style={{width: "100%"}}
                   footer={data => (
                       <div onClick={event => {
                           setCreateBotModalShown(true);
                       }}>
                           <PlusCircleOutlined/>
                       </div>
                   )}/>
            <Modal visible={createBotModalShown}
                   onCancel={() => {
                       setCreateBotModalShown(false);
                       form.resetFields();
                   }}
                   onOk={() => {
                       form.validateFields()
                           .then(value => {
                               createBot({
                                   data: {
                                       token: form.getFieldValue("token"),
                                       name: form.getFieldValue("name")
                                   }
                               }).then(() => {
                                   setCreateBotModalShown(false);
                               })
                           })
                   }}
            >
                <Form form={form}>
                    <Form.Item name={"name"} label={<Trans i18nKey={"discord.bot.name"}/>} rules={[{required: true}]}>
                        <Input type={"Text"}></Input>
                    </Form.Item>
                    <Form.Item name={"token"} label={<Trans i18nKey={"discord.bot.token"}/>} rules={[{required: true}]}>
                        <Input type={"Text"}></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </Row>
    )
}