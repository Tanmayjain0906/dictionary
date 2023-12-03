import React from "react";
import { useSelector } from "react-redux";

const Word = () => {

    const { data, err } = useSelector(state => state.apiReducer);

    return (
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
                                                                mean.definitions.map((def, index) => (
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
    )
}

export default Word;