import { useState, useContext } from "react";
import "../../css/home.css";
import { NotesContext } from "../NotesContext";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import NoteMenu from "./NoteMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function Home() {
  // get notes from context
  const { notes } = useContext(NotesContext);

  // anchorEl and selectedId for the note menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate();

  // colors for the notes
  const pastelColors = [
    "#FFB3BA",
    "#FFDFBA",
    "#FFFFBA",
    "#BAFFC9",
    "#BAE1FF",
    "#E6B3FF",
    "#B3FFEC",
    "#FFB3E6",
    "#FFD1B3",
    "#FFF0BA",
  ];

  // shorten the note text
  const truncatedText = (note) => {
    return note.length > 15 ? note.substring(0, 15) + "..." : note;
  };

  // handle note click
  const handleNoteClick = (e, id) => {
    navigate(`/editnote?edit=${id}`);
  };

  // handle dots click
  const handleDotsClick = (e, id) => {
    e.stopPropagation() // stop the event from bubbling up
    setAnchorEl(e.currentTarget);
    setSelectedId(id);
  };

  // close the note menu and nullify the selectedId
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="home">
        <div className="content">
          
          {/* if notes is empty, show the illustration and text */}
          {notes.length === 0 ? (
            <>
              <img
                src="Notes-bro.png"
                alt="illustration"
                className="illustration"
              />
              <h5>Create your first note!</h5>
            </>
          ) : (
            
            // if notes is not empty, show the notes list
            <div className="notes-list">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="note-item"
                  style={{
                    // set the background color of the note
                    backgroundColor:
                      pastelColors[note.id % pastelColors.length],
                  }}
                  onClick={(event) => handleNoteClick(event, note.id)}
                >
                  {truncatedText(note.title)}
                  <IconButton
                    onClick={(event) => handleDotsClick(event, note.id)}
                    className="icons-right"
                  >
                    <MoreHorizIcon className="note-item-icon" />
                  </IconButton>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <NoteMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        id={selectedId}
      />
    </>
  );
}
