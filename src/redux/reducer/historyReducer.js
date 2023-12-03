import { ADD_HISTORY } from "../actions/actionTypes";

const initialHistory = [];

const historyReducer = (state=initialHistory, action) => {

    if(action.type == ADD_HISTORY)
    {
        const word = action.payload;

        for(let i=0 ;i<state.length;i++)
        {
            if(state[i] == word)
            {
                return [...state];
            }
        }

        return [...state, action.payload];
    }
    else{
        return state;
    }
}

export default historyReducer;