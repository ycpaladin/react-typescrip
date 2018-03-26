import { Dispatch } from "react-redux";
import { Action } from "redux";
import { ITodoListItem } from "../models/todo.model";

export const LOAD_TODO_LIST: string = "[Todo] Load todo list";
export const ADD_TODO_LIST_ITEM: string = "[Todo] Add todo item";
export const UPDATE_TODO_LIST_STATE: string = "[Todo] Update todo iten completed";
export const LOAD_TODO_LIST_FETCHING: string = "[Todo] Load todo list fetching";

const d: ITodoListItem[] = [{ id: "1", name: "chenke", isCompleted: false },
{ id: "2", name: "ccw", isCompleted: false },
{ id: "3", name: "lxy", isCompleted: false }];

export function getTodoList(): any {

    return (dispatch: Dispatch<any>) => {
        dispatch({ type: LOAD_TODO_LIST_FETCHING });
        setTimeout(() => {
            dispatch({ type: LOAD_TODO_LIST, data: d });
        }, 2000);

    };
}
