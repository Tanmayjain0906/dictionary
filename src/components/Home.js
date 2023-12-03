import React, { useEffect, useState } from "react";
import { fetchData } from "../redux/actions/apiActions";
import { useSelector, useDispatch } from "react-redux";
import { add_history } from "../redux/actions/historyActions";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {

    const { data, loading, err } = useSelector(state => state.apiReducer);
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    useEffect(() => {
        if (sessionStorage.getItem("word") !== null) {
            dispatch(fetchData(sessionStorage.getItem("word")));
            dispatch(add_history(sessionStorage.getItem("word")));
        }
        
    }, [])

    function handleForm(e) {
        e.preventDefault();

        if (search) {
            dispatch(fetchData(search.trim()));
            sessionStorage.setItem("word", search.trim());
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
            {
                loading && <div>
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </div>
            }

            <div className="data">
                {
                    data.length > 0 ? <div >
                        {
                            data.map((list, index) => (
                                <div className="list" key={index}>
                                    <h2>{list.word}</h2>

                                    {
                                        list.phonetics.length > 0 && <div>
                                            {
                                                list.phonetics.map((audioFile, index) => (

                                                    <div key={index}>
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
                                                list.meanings.map((mean, index) => (
                                                    <div key={index}>
                                                        <b><p>{mean.partOfSpeech}</p></b>
                                                        {
                                                            mean.definitions.length > 0 && <div>
                                                                {
                                                                    mean.definitions.map((def , index) => (
                                                                        <p key={index}>{def.definition}</p>
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
                    </div> : <div>
                        {
                            err !== null && <h1>{err.message}</h1>
                        }
                    </div>
                }


            </div>
        </div>
    )
}

export default Home;