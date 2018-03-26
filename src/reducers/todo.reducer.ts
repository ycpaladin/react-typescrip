import { List } from "immutable";
import * as todoAction from "../actions/todoAction";
import { ITodoListItem } from "../models/todo.model";

export interface IState {
    isFetching: boolean;
    data: List<ITodoListItem>;
    error: boolean;
}

const defaultState: IState = {
    isFetching: false,
    data: List.of(),
    error: false,
};

export function reducer(state: IState = defaultState, action: { type: string, data: any }): IState {
    switch (action.type) {
        case todoAction.LOAD_TODO_LIST:
            const items: ITodoListItem[] = action.data;
            return { ...state, data: List.of(...items) };
        case todoAction.ADD_TODO_LIST_ITEM:
            // action.
            const item: ITodoListItem = action.data;
            state.data.push(item);
        case todoAction.UPDATE_TODO_LIST_STATE:
            const id: string = action.data;
            const _: ITodoListItem = state.data.find((t) => t.id === id);
            _.isCompleted = !_.isCompleted;
        default:
            return {
                ...state,
                data: List.of(...state.data.toArray()),
            };
    }
}
