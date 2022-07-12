import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from 'antd';
import OAuth2RedirectHandler from "./user/oauth2/OAuth2RedirectHandler";
import {Login} from "./user/login/Login";


function App() {


    return (
        <BrowserRouter>
            <Layout style={{"minHeight": "100vh"}}>
                <Routes>
                    <Route path={"/oauth2/redirect"} element={<OAuth2RedirectHandler/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/"}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
