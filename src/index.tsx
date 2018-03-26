import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";

import { store } from "./configStore";
import { Provider } from "react-redux";
import { RootRouter } from "./routing";
import { NavComponent } from "./components/NavComponent";

import "antd/dist/antd.less";
import "./style.scss";

interface IndexProps {

}

interface IndexState {

}

class IndexComponent extends Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
    }

    render(): ReactNode {
        return <Provider store={store}>
            <RootRouter />
        </Provider>;
    }
}

const root: HTMLElement = document.body;

ReactDOM.render(< IndexComponent />, root);
