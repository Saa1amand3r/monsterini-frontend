import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisteringPage from "./pages/RegisteringPage";
import Questionnaire from "./pages/Questionnaire";
import LeaderboardPage from "./pages/LeaderBoard";


function App() {
    const [session, setSession] = useState(null);

    return (
        <Router>
            <Navbar session={session} />
            <Routes>
                <Route path="/" element={<HomePage session={session}/>} />
                <Route path="/login" element={<LoginPage setSession={setSession} />} />
                <Route path="/leaderboard" element={<LeaderboardPage/>}></Route>
                <Route path="/register" element={<RegisteringPage setSession={setSession} />} />
                <Route path={"/questionnaire"} element={<Questionnaire session={session?.id}/>} />
            </Routes>
        </Router>
    );
}

export default App;
