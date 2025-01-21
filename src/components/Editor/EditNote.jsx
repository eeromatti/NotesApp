import React, { useContext, useState, useEffect } from 'react';
import { NotesContext } from '../NotesContext';
import { useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce'; 
import '../../css/editor.css';

export default function EditNote() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const { notes, setNotes, editNote } = useContext(NotesContext);
    const location = useLocation();
    
    //get index from URL params
    const query = new URLSearchParams(location.search);
    const index = query.get('edit');
    
    // load notes from local storage if exists (run once)
    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, [setNotes]);

    // check url params if note exists and is being edited
    useEffect(() => {    
        if (notes[index] !== null) {
            const noteToEdit = notes.find((note) => note.id === index);
            if (noteToEdit) {
                setTitle(noteToEdit.title);
                setContent((noteToEdit.content));
            }
        } 
    }, [notes, index], );

    //update storage when notes change
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    // requests editNote function when user stops typing
    const debouncedSave = debounce((updatedNoteObject) => {
        if (updatedNoteObject) {
            editNote(updatedNoteObject);    
        }
    }, 1000)

    useEffect(() => {
        //if title and/or content are not empty
        if (title.trim() && content.trim()) {
            //create/update object
            const newObject = {
                "id": index,
                "title": title,
                "content": content
            }
            
            const updatedNotes = notes.map((note) =>
                note.id === newObject.id ? newObject : note
            );
            setNotes(updatedNotes);
            debouncedSave(newObject);
        } else {
            console.log("Title and/or content is empty");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, content]);
             
    const handleNoteChange = (event) => {
        setContent(event.target.value); 
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="editor">
            <input
                className="note-title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter note title"
            >
            </input>
            <textarea
                className="note-editor"
                value={content}
                onChange={handleNoteChange}
            />
        </div>
    );
}