import {useGetRolesQuery, useGetUsersQuery} from "../reducer/backendApi";
import {LoadingSpinner} from "../components/loading/LoadingSpinner";
import {Card, Form, Row, Select} from "antd";
import {useForm} from "antd/es/form/Form";
import {Trans} from "react-i18next";
import {Title} from "../components/misc/Title";
import {Option} from "antd/es/mentions";
import {useState} from "react";
import {IProfile} from "../reducer/backendApiModels";

export function UserManagement() {
    const users = useGetUsersQuery();
    const roles = useGetRolesQuery();
    const [form] = useForm();
    const [selectedUser, selectUser] = useState<IProfile>();


    if (!roles.isSuccess || !users.isSuccess) {
        if (users.isError) {
            console.log("Error while loading Users!", users.error);
        }
        if (roles.isError) {
            console.log("Error while loading Roles!", roles.error);
        }
        return <LoadingSpinner/>
    }

    return (
        <Row>
            <Row style={{width: "100%"}}>
                <Title langKey={"admin.management.users.title"}/>
                <Card bordered={false}>
                    <Row><Trans i18nKey={"admin.management.users.amount"} values={{amount: users.data.length}}/></Row>
                </Card>
            </Row>
            <Row style={{width: "100%"}}>
                <Form form={form}>
                    <Form.Item name={"user-selection"} rules={[{required: true}, {type: "string"}]}
                               label={<Trans i18nKey={"admin.management.users.select"}/>}>
                        <Select style={{width: "150px"}}
                                onChange={(value, option) => {
                                    const foundUser = users.data.find(user => user.id === value);
                                    selectUser(foundUser);
                                    console.log("Selected: ", foundUser);
                                }}>
                            {users.data.map(user => {
                                return <Option key={user.id} value={user.id}>{user.name}</Option>
                            })}
                        </Select>
                    </Form.Item>
                </Form>
            </Row>
        </Row>
    )
}