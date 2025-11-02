import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Match from "./match"; // assuming your file is match.jsx
import Chat from "./chat"; // assuming your file is chat.jsx

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Match />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}