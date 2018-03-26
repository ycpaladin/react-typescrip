import { combineReducers, Reducer, ReducersMapObject } from "redux";
import { routerReducer } from "react-router-redux";

import * as userReducer from "./userReducer";
import * as todoReducer from "./todo.reducer";

export interface IRootState {
    user: userReducer.IState;
    todo: todoReducer.IState;
    routing: any;
}

const defaultRootState: ReducersMapObject = {
    user: userReducer.reducer,
    todo: todoReducer.reducer,
    routing: routerReducer
};

export const rootReducer: Reducer<IRootState> = combineReducers(defaultRootState);

