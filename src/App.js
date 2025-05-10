import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisteringPage from "./pages/RegisteringPage";

function App() {
    const [session, setSession] = useState(null);

    return (
        <Router>
            <Navbar session={session} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage setSession={setSession} />} />
                <Route path="/register" element={<RegisteringPage setSession={setSession} />} />
            </Routes>
        </Router>
    );
}

export default App;
