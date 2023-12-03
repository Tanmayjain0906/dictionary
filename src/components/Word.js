import React from "react";
import { useSelector} from "react-redux";

const Word = () => {

    const { data } = useSelector(state => state.apiReducer);

    return(
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
    )
}

export default Word;