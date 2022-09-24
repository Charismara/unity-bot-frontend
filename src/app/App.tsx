import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Col, Layout, Menu, Row} from 'antd';
import OAuth2RedirectHandler from "./user/oauth2/OAuth2RedirectHandler";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Profile} from "./user/profile/Profile";
import {Home} from "./pages/home";
import {LogoutRedirect} from "./components/login/LogoutRedirect";
import {ProfileComponent} from "./components/login/ProfileComponent";
import {UnityLogoWithName} from "./components/misc/UnityLogoWithName";
import {UserManagement} from "./pages/UserManagement";
import {DiscordBotManagement} from "./pages/discordBotManagement";
import {MyServers} from "./pages/myServers";

function App() {
    return (
        <Layout style={{"minHeight": "100vh"}}>
            <Header>
                <Row>
                    <Col>
                        <UnityLogoWithName/>
                    </Col>
                    <Col flex={1}>
                        <Menu></Menu>
                    </Col>
                    <Col>
                        <ProfileComponent/>
                    </Col>
                </Row>
            </Header>
            <Content className={"content-container"}>
                <Routes>
                    <Route path={"/"} key={"Home"} element={<Home/>}/>
                    <Route path={"/home"} key={"Home"} element={<Home/>}/>
                    <Route path={"/oauth2/redirect"} element={<OAuth2RedirectHandler/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/logout"} element={<LogoutRedirect/>}/>
                    <Route path={"/discord/servers"} element={<MyServers/>}/>
                    <Route path={"/admin/users"} element={<UserManagement/>}/>
                    <Route path={"/admin/discord/bots"} element={<DiscordBotManagement adminMode={true}/>}/>
                </Routes>
            </Content>
            <Footer>
                <Row align={"middle"} style={{width: "100%"}} justify={"center"}>
                    <div style={{color: "white"}}>Unity Bot ©{new Date().getFullYear()} Created by BlutmondGilde
                    </div>
                </Row>
            </Footer>
        </Layout>
    );
}

export default App;
