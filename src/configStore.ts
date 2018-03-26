import { createStore, applyMiddleware, Store, StoreEnhancerStoreCreator } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
// import { routers } from "react-router";
import { History } from "history";
import createBrowserHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { rootReducer, IRootState } from "./reducers";

export const history: History = createBrowserHistory();

const buildStore: StoreEnhancerStoreCreator<IRootState> =
    <StoreEnhancerStoreCreator<IRootState>>applyMiddleware(
        loggerMiddleware,
        thunkMiddleware,
        routerMiddleware(history)
    )(createStore);

export const store: Store<IRootState> = buildStore(rootReducer);


// export const history = syncHistoryWithStore(browserHistory, store);

