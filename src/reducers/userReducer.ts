
export interface IState {
    isFetching: boolean;
    error: boolean;

}


const defaultState: IState = {
    isFetching: false,
    error: false
};


export function reducer(state: IState = defaultState, action: any): IState {

    return state;
}

