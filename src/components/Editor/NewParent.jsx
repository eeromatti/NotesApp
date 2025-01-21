import { useRef } from 'react'
import HeaderEditor from './HeaderEditor'
import NewNote from './NewNote'

export default function NewParent() {
    const newNoteRef = useRef();

    // request NewNote to save the note
    const handleSaveNote = () => {
        if (newNoteRef.current && newNoteRef.current.saveNote) {
            return newNoteRef.current.saveNote(); 
        }
    };

    return (
        <div>
            <HeaderEditor onSaveNote={handleSaveNote}/>
            <NewNote ref={newNoteRef}/>
        </div>
    )
}