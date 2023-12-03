import { FETCHING, FETCHING_SUCCESS, FETCHING_ERROR } from "../actions/actionTypes";

const initialState = {
    loading : false,
    data: [],
    err: null,
}

const apiReducer = (state = initialState, action) => {

    switch(action.type)
    {
        case FETCHING : return {...state, loading: true};
        case FETCHING_SUCCESS: return {...state, loading: false, data: action.payload, err: null};
        case FETCHING_ERROR: return {...state, loading: false, data: [], err: action.payload};
        default: return state;
    }
}

export default apiReducer;