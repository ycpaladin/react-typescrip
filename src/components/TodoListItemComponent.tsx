import React, { Component, ReactNode } from "react";
import { ITodoListItem } from "../models/todo.model";

interface IProps extends ITodoListItem {
    // item: ITodoListItem;
    [key: string]: any;
    changeState(id: string): void;
}

export class TodoListItemComponent extends Component<IProps, any> {

    render(): ReactNode {
        const { id, name, isCompleted } = this.props;
        console.log(isCompleted, id);
        return (
            <li>
                <input type="checkbox" onClick={this.completed.bind(this)}
                    checked={isCompleted} />
                <span onClick={this.completed.bind(this)}>
                    {name}
                </span>
            </li>
        );
    }

    completed(): void {
        const { id, name, isCompleted } = this.props;
        console.log(id, name, isCompleted);
        this.props.changeState(id);
    }
}
