import { DatePicker } from "antd";
import React, { Component, ReactNode } from "react";
import { connect, Dispatch } from "react-redux";
import { getTodoList, LOAD_TODO_LIST, UPDATE_TODO_LIST_STATE } from "../actions/todoAction";
import { NavComponent } from "../components/NavComponent";
import { TodoListItemComponent } from "../components/TodoListItemComponent";
import { IRootState } from "../reducers";
import * as todo from "../reducers/todo.reducer";

interface IState { }

interface IProps extends todo.IState {
    dispatch: Dispatch<any>;
}

class TodoListPage extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getTodoList());
    }

    render() {
        let children = null;
        if (this.props.data.count() > 0) {
            children = this.props.data.map((item, index) =>
                (<TodoListItemComponent
                    {...item}
                    key={index}
                    changeState={this.changeItemState.bind(this)} />));
        }
        return (<div className="page">
            <div id="container">
                <ul>
                    {children}
                </ul>
            </div>
            <div className="date">
                <DatePicker />
            </div>
        </div>);
    }

    changeItemState(id: string): void {
        this.props.dispatch({ type: UPDATE_TODO_LIST_STATE, data: id });
        // this.props.dispatch({ type: LOAD_TODO_LIST });
    }
}

export default connect((root: any) => root.todo)(TodoListPage);
