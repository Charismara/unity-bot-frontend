import {
    useCreateDiscordBotMutation, useDeleteDiscordBotAdminMutation,
    useGetDiscordBotsAdminQuery,
    useStartDiscordBotMutation, useStopDiscordBotMutation
} from "../reducer/backendApi";
import {Button, Form, Input, Modal, Row, Space, Table} from "antd";
import {Trans} from "react-i18next";
import {IDiscordBot} from "../reducer/backendApiModels";
import {ColumnType} from "antd/es/table";
import {PlusCircleOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useForm} from "antd/es/form/Form";

interface Properties {
    adminMode?: boolean
}

export function DiscordBotManagement(properties: Properties) {
    const knownBots = useGetDiscordBotsAdminQuery();
    const [createBot, resultCreateBot] = useCreateDiscordBotMutation();
    const [startBot, resultStartBot] = useStartDiscordBotMutation();
    const [stopBot, resultStopBot] = useStopDiscordBotMutation();
    const [deleteBot, resultDeleteBot] = useDeleteDiscordBotAdminMutation();
    const [modalShown, setModalShown] = useState<boolean>(false);
    const [form] = useForm();

    const cols: ColumnType<IDiscordBot>[] = [
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
                </Space>
            )
        }
    ]

    return (
        <Row style={{width: "100%"}}>
            <Table dataSource={knownBots.data} loading={!knownBots.isSuccess} columns={cols} style={{width: "100%"}}
                   footer={data => (
                       <div onClick={event => {
                           setModalShown(true);
                       }}>
                           <PlusCircleOutlined/>
                       </div>
                   )}/>
            <Modal visible={modalShown}
                   onCancel={() => {
                       setModalShown(false);
                       form.resetFields();
                   }}
                   onOk={() => {
                       form.validateFields()
                           .then(value => {
                               createBot({data: {token: form.getFieldValue("token")}}).then(() => {
                                   setModalShown(false);
                               })
                           })
                   }}
            >
                <Form form={form}>
                    <Form.Item name={"token"} label={<Trans i18nKey={"discord.bot.token"}/>}>
                        <Input type={"Text"}></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </Row>
    )
}