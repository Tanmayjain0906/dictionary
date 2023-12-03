import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/apiActions";
import { Link } from "react-router-dom";

const History = () => {

    const history = useSelector(state => state.historyReducer);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Search History</h1>
            {
                history.length>0 && <div>
                    {
                        history.map((item) => (
                            <Link to="/words"><p className="history-tag" onClick={() => dispatch(fetchData(item))}>{item}</p></Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default History;