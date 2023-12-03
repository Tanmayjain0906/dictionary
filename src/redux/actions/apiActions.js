import { FETCHING, FETCHING_ERROR, FETCHING_SUCCESS } from "./actionTypes";
import axios from "axios";

export const fetching = () => {

    return {
        type: FETCHING
    }
}

export const fetching_success = (data) => {

    return {
        type: FETCHING_SUCCESS,
        payload: data
    }
}

export const fetching_error = (data) => {

    return {
        type: FETCHING_ERROR,
        payload: data
    }
}

export const fetchData = (word) => {

    return async function(dispatch)
    {
        try{
            dispatch(fetching());
            let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            dispatch(fetching_success(response.data));
        }
        catch(err)
        {
            dispatch(fetching_error(err));
        }
    }
}