import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/apiActions";
import { add_history } from "../redux/actions/historyActions";
import { useNavigate } from "react-router-dom";

const History = () => {

    const history = useSelector(state => state.historyReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(add_history(sessionStorage.getItem("word")));
    }, [])
    return(
        <div>
            <h1>Search History</h1>
            {
                history.length>0 && <div>
                    {
                        history.map((item, index) => (
                           <p className="history-tag" key={index} onClick={() => {dispatch(fetchData(item))
                        navigate("/words")}}>{item}</p>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default History;