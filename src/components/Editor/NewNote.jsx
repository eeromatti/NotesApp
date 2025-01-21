import React, {
  useContext,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { NotesContext } from "../NotesContext";
import "../../css/editor.css";

const NewNote = forwardRef((props, ref) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [index] = useState(Math.floor(Math.random() * 10000).toString());
  const [newNote, setNewNote] = useState("");
  const { addNote, setNotes, notes } = useContext(NotesContext);

  // save note unless it's empty
  const saveNote = () => {
    if (newNote.title && newNote.content) {
      setNotes([...notes, newNote]);
      addNote(newNote);
    }
  };
  useImperativeHandle(ref, () => ({
    saveNote,
  }));

  // update newNote object when title or content changes
  useEffect(() => {
    if (title.trim() && content.trim()) {
      const newObject = {
        id: index,
        title,
        content: content,
      };
      setNewNote(newObject);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content]);

  const handleNoteChange = (event) => {
    setContent(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="editor">
      <input
        className="note-title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter note title"
      />
      <textarea
        className="note-editor"
        value={content}
        onChange={handleNoteChange}
      />
    </div>
  );
});

export default NewNote;
