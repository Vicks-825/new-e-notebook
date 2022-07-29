import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s = {
        "name": "Vicky",
        "lang": "JavaScript"
    }
    const [state, setState] = useState(s);
    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Adition",
                "lang": "Python"
            })
        }, 1000);
    }
    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>

    )
}

export default NoteState