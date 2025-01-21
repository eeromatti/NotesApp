// NotesContext.jsx
import { createContext } from "react";
import { useState, useEffect } from "react";
import noteService from '../services/noteService'


export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null)

    // Fetch notes from the server
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await noteService.getAll()
                setNotes(response.data)
            } catch (error) {
                console.error("Error in fetching notes:", error);
                setError("Failed to load notes.")
            } 
        };
        fetchNotes();
    }, []);

    // Add a new note
    const addNote = async (newNoteObject) => {
        try {
            await noteService.create(newNoteObject);
        } catch {
            console.error("Error in adding the note:", error);
            setError("Failed to add the note.")
        }
    };

    // Edit an existing note
    const editNote = async (updatedNoteObject) => {
        try {
            await noteService.update(parseInt(updatedNoteObject.id), updatedNoteObject)
        } catch {
            console.error("Error in editing the note:", error);
            setError("Failed to edit the note.")
        }
    };

    // Delete a note
    const deleteNote = async (id) => {
        try {
            console.log("deleteNotea kutsutaan, id:", id)
            await noteService.remove(id)
            const updatedNotes = notes.filter((note) => note.id !== id);
            setNotes(updatedNotes)
        } catch {
            console.error("Error in deleting the note:", error);
            setError("Failed to delete the note.")
        }
    };

    return (
        <NotesContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};
