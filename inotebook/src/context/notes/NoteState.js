import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "653aabdc1922f49a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aac191922f49a630970b1",
            "user": "653a33f228c206c1a910ee3f",
            "title": "My Schedule",
            "description": "12:30 bje tak aaj padhna hai",
            "tag": "personal",
            "date": "2023-10-26T18:12:41.773Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;