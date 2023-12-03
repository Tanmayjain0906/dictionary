import { ADD_HISTORY } from "./actionTypes";

export const add_history = (data) => {

    return{
        type: ADD_HISTORY,
        payload: data
    }
}