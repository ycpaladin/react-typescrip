import React, { Component, ReactNode } from "react";
import { Route, Router, Switch } from "react-router";
import { history } from "./configStore";
import { IndexPage } from "./pages/IndexPage";

import { UserPage } from "./pages/UserPage";
import { ConnectedRouter } from "react-router-redux";
import TodoListPage from "./pages/TodoListPage";
import { Layout, Row, Col } from "antd";
import { NavComponent } from "./components/NavComponent";

// interface IProps {
//     history: any;
// }

// <Layout.Sider collapsible={true} collapsed={true}>
// <NavComponent />
// </Layout.Sider>

export class RootRouter extends Component {

    render(): ReactNode {
        return (
            <Router history={history}>
                <Layout className="layout">
                    <Layout.Header>
                        Header
                    </Layout.Header>
                    <Layout className="content-layout">
                        <Layout.Sider collapsible={false} collapsed={false}>
                            <NavComponent />
                        </Layout.Sider>
                        <Layout.Content >
                            <Switch>
                                <Route exact path="/" component={IndexPage}></Route>
                                <Route path="/user" component={UserPage} ></Route>
                                <Route path="/todo" component={TodoListPage} ></Route>
                            </Switch>
                        </Layout.Content>
                    </Layout>
                    <Layout.Footer>
                        footer
                    </Layout.Footer>
                </Layout>
            </Router>
        );
    }
}
