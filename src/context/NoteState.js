import NoteContext from "./NoteContext";
import React, {useState} from "react";

const NoteState  = (props) => {

    const data = {
        'name': "Sachin",
        'skill': 'Mern Stack Developer'
    }
    // eslint-disable-next-line
    const [state, setState] = useState(data);
    const [btn, setBtn] = useState();
    

    const submitEvent = () => {
        setBtn("testing")
        console.log('Hurray I have triggered function from another component using useContext')
    }
    
    return(
        <NoteContext.Provider value={{state, btn, submitEvent}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;

