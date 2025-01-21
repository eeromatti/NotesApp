import { useContext } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { NotesContext } from '../NotesContext';

export default function NoteMenu({ anchorEl, open, onClose, id }) {
    const { deleteNote } = useContext(NotesContext);

    const handleDelete = () => {
        deleteNote(id);
        onClose();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    );
}
