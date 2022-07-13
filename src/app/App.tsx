import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Col, Layout, Menu, Row} from 'antd';
import OAuth2RedirectHandler from "./user/oauth2/OAuth2RedirectHandler";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Profile} from "./user/profile/Profile";
import {useGetProfileQuery} from "./reducer/backendApi";
import {UnityBotLogo} from "./components/svg/UnityBotLogo";
import {Home} from "./pages/home";
import {LoginButton} from "./components/login/LoginButton";
import {LogoutRedirect} from "./components/login/LogoutRedirect";


function App() {
    const profile = useGetProfileQuery({});

    return (
        <BrowserRouter>
            <Layout style={{"minHeight": "100vh"}}>
                <Header>
                    <Row>
                        <Col>
                            <Row>
                                <UnityBotLogo style={{"width": "3rem", "height": "3rem", "marginTop": "0.5rem"}}/>
                                <span style={{gridColumn: "2", gridRow: "1", color: "#fff", fontSize: "3rem",}}>Unity Bot</span>
                            </Row>
                        </Col>
                        <Col flex={1}>
                            <Menu></Menu>
                        </Col>
                        <Col>
                            {profile.isSuccess ? <Link to={"logout"}>
                                <div>{profile.data.name}</div>
                            </Link> : <LoginButton/>}
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Routes>
                        <Route path={"/"} key={"Home"} element={<Home/>}/>
                        <Route path={"/oauth2/redirect"} element={<OAuth2RedirectHandler/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/logout"} element={<LogoutRedirect/>}/>
                    </Routes>
                </Content>
                <Footer>
                    <Row align={"middle"} style={{width: "100%"}} justify={"center"}>
                        <div style={{color: "white"}}>Unity Bot ©{new Date().getFullYear()} Created by BlutmondGilde
                        </div>
                    </Row>
                </Footer>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
