import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeParent from "./components/Home/HomeParent";
import NewParent from "./components/Editor/NewParent";
import EditParent from "./components/Editor/EditParent";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomeParent />} />
          <Route path="/newnote" element={<NewParent />} />
          <Route path="/editnote" element={<EditParent />} />
        </Routes>
      </Router>
    </div>
  );
}
