import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/apiActions";
import { Link } from "react-router-dom";
import { add_history } from "../redux/actions/historyActions";

const History = () => {

    const history = useSelector(state => state.historyReducer);
    const dispatch = useDispatch();
    
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
                            <Link to="/words" key={index}><p className="history-tag" onClick={() => dispatch(fetchData(item))}>{item}</p></Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default History;