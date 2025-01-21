// Header.jsx
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../css/header.css'

export default function Header() {
  
  const navigate = useNavigate()

  // Add button click (seach button not yet implemented)
  const handleClickAdd = () => {  
    navigate(`/newnote`);
  }

  return (
    <div className='heading-area'>
    <h2>Notes</h2>
    <div className='icons'>
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