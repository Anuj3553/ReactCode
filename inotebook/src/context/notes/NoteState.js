import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get all Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzYTMzZjIyOGMyMDZjMWE5MTBlZTNmIn0sImlhdCI6MTY5ODMzMDcxN30.yutur40MKRgeBJDKrIPeTr93FPYGT1iUknsQzWNyPSY"
            }
        });
        const json = await response.json();
        // console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO : API CALL
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzYTMzZjIyOGMyMDZjMWE5MTBlZTNmIn0sImlhdCI6MTY5ODMzMDcxN30.yutur40MKRgeBJDKrIPeTr93FPYGT1iUknsQzWNyPSY"
            },
            body: JSON.stringify({ title, description, tag }),
        });

        const json = await response.json();
        console.log(json);

        const note = {
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
    const deleteNote = async (id) => {
        // TODO : API CALL
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzYTMzZjIyOGMyMDZjMWE5MTBlZTNmIn0sImlhdCI6MTY5ODMzMDcxN30.yutur40MKRgeBJDKrIPeTr93FPYGT1iUknsQzWNyPSY"
            },
            body: JSON.stringify({ title, description, tag }),
        });

        const json = await response.json();
        console.log(json);

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;