// Header.jsx
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import '../../css/header.css'

export default function HeaderEditor({ onSaveNote }) {
  
  const navigate = useNavigate()

  // not implemented
  const handleClickAdd = () => {  
    navigate('/editor')
  }

  // click back and save note unless note is empty
  const handleClickBack = async () => {
    try {
      if (onSaveNote) {
        await onSaveNote(); 
      }
      navigate('/'); 
    } catch (error) {
      console.error("Error in saving the note:", error);
    }
  };

  // add tickbox on the note (not implemented)
  const handleTickAdd = () => {
    console.log("lisätään tick box")
    
  }

  return (
  <div className='heading-area'>  
    <div>
      <IconButton onClick={handleClickBack}>
          <ChevronLeftIcon className='icon'/>
      </IconButton>
      
    </div>
    <div className='icons-right'>
      <IconButton onClick={handleTickAdd}>
        <DoneIcon className='icon'/>
      </IconButton>
      <IconButton onClick={handleClickAdd}>
        <AddIcon className='icon'/>
      </IconButton>
      <IconButton>
        <SearchIcon className='icon'/>
      </IconButton>
    </div>
  </div>
  )
}

