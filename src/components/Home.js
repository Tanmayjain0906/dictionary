import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/actions/apiActions";
import { useSelector, useDispatch } from "react-redux";
import { add_history } from "../redux/actions/historyActions";

const Home = () => {

    const { data } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    useEffect(() => {
    
        if(sessionStorage.getItem("word") !== null)
        {
            dispatch(fetchData(sessionStorage.getItem("word")));
        }
        else{
            dispatch(fetchData(""));
        }
      
    }, [])

    function handleForm(e) {
        e.preventDefault();

        if (search) {
            dispatch(fetchData(search.trim()));
            sessionStorage.setItem("word", search.trim());
            console.log(data);
            dispatch(add_history(search.trim()));
            setSearch("");
        }
    }

    return (
        <div className="home">

            <form onSubmit={handleForm} >
                <input type="text" id="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" id="search-btn">Search</button>
            </form>

            <div className="data">
                {
                    data.length > 0 ? <div >
                        {
                            data.map((list) => (
                                <div className="list">
                                    <h2>{list.word}</h2>

                                    {
                                        list.phonetics.length > 0 && <div>
                                            {
                                                list.phonetics.map((audioFile) => (

                                                    <div>
                                                        <p>{audioFile.text}</p>
                                                        <audio controls>
                                                            <source src={audioFile.audio} type="audio/mp3" />
                                                        </audio>

                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }

                                    {
                                        list.meanings.length > 0 && <div>
                                            {
                                                list.meanings.map((mean) => (
                                                    <div>
                                                        <b><p>{mean.partOfSpeech}</p></b>
                                                        {
                                                            mean.definitions.length > 0 && <div>
                                                                {
                                                                    mean.definitions.map((def) => (
                                                                        <p>{def.definition}</p>
                                                                    ))
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div> : <h1>Result Not Found</h1>
                }
            </div>
        </div>
    )
}

export default Home;