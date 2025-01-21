import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NotesProvider } from "./components/NotesContext";

createRoot(document.getElementById('root')).render(
  <NotesProvider>
    <App />
  </NotesProvider>
)
