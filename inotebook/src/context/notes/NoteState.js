import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "653aabdc193422f49a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aabdc19dsds22f49a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aabd223c1922f49a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aabdc1922f344349a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aabd232c1922f49a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aabdc1922f4129a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aab8789dc1922f49a630970ac",
            "user": "653a33f228c206c1a910ee3f",
            "title": "Youtube",
            "description": "Subscribe to my channel guys",
            "tag": "personal",
            "date": "2023-10-26T18:11:40.412Z",
            "__v": 0
        },
        {
            "_id": "653aacu999191922f49a630970b1",
            "user": "653a33f228c206c1a910ee3f",
            "title": "My Schedule",
            "description": "12:30 bje tak aaj padhna hai",
            "tag": "personal",
            "date": "2023-10-26T18:12:41.773Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO : API CALL
        console.log("Adding a new note")
        let note = {
            "_id": "653aacu999191667922f49a630970b1",
            "user": "653a33f228c206c1a910ee3f",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-10-26T18:12:41.773Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {

    }

    // Edit a Note
    const editNote = (id) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;