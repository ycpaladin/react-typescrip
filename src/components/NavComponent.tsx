import React, { Component, ReactNode } from "react";
import { history } from "../configStore";
import { Link } from "react-router-dom";

interface INavConfig {
    name: string;
    url: string;
}
const navConfig: INavConfig[] = [{
    name: "首页",
    url: "/"
}, {
    name: "用户管理",
    url: "/user"
}, {
    name: "TODO List",
    url: "/todo"
}];
export class NavComponent extends Component {

    render(): ReactNode {
        const components: ReactNode[] = navConfig.map((item, index) =>
            (<li key={index} >
                <Link to={item.url}>
                    {item.name}
                </Link>
            </li>));
        return (<ul>
            {components}
        </ul>);
    }

    jumpPage(item: INavConfig): void {
        // alert(history);
        history.push(item.url);
    }

}