import { ACTION } from "./Action";

export const reducer = (state,action) => {
    switch (action.type) {
        case ACTION.INCREASE:
            return state+1;
        case ACTION.DICREASE:
            return state-1
        default:
            return state;
    }
}

