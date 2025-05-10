import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
    FaClipboard, FaCrown, FaHistory, FaPlay, FaStar, FaTrophy
} from "react-icons/fa";
import { FaMapLocation, FaRankingStar, FaSliders } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Card from "../components/Card";
import CardClickable from "../components/CardClickable";
import RecentActivity from "../components/RecentActivity";
import UserPicksNumber from "../components/UserPicksNumber";
import WePickNumber from "../components/WePickNumber";

const initialBoard = Array(9).fill(null);

const HomePage = () => {
    const [showSplitButtons, setShowSplitButtons] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [board, setBoard] = useState(initialBoard);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [userPicksANumberShow, setUserPicksANumberShow] = useState(false)
    const [wePickANumberShow, setWePickANumberShow] = useState(false)

    const promptHandler = () => {
        alert("Prompt triggered");
    };

    const randomSideQuestHandler = () => {
        setBoard(initialBoard);
        setGameOver(false);
        setIsPlayerTurn(true);
        setShowModal(true);
    };

    const checkWinner = (newBoard) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (let [a, b, c] of lines) {
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                return newBoard[a];
            }
        }

        if (!newBoard.includes(null)) return "Draw";

        return null;
    };

    const handleClick = (index) => {
        if (!isPlayerTurn || board[index] || gameOver) return;

        const newBoard = [...board];
        newBoard[index] = "X";
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
            setGameOver(true);
            if (winner === "Draw") {
                userPicksANumber();
            } else if (winner === "X") {
                userPicksANumber();
            } else {
                wePickANumber()
            }
            return;
        }

        setIsPlayerTurn(false);

        // Computer makes a random move
        setTimeout(() => {
            const empty = newBoard
                .map((val, i) => (val === null ? i : null))
                .filter(i => i !== null);

            const randomIndex = empty[Math.floor(Math.random() * empty.length)];
            if (randomIndex != null) {
                newBoard[randomIndex] = "O";
            }

            setBoard([...newBoard]);
            const win = checkWinner(newBoard);
            if (win) {
                setGameOver(true);
                if (win === "Draw") {
                    userPicksANumber();
                } else if (win === "X") {
                    userPicksANumber();
                } else {
                    wePickANumber()
                }
                return;
            }

            setIsPlayerTurn(true);
        }, 500);
    };

    const userPicksANumber = () => {
        setUserPicksANumberShow(true);
    }

    const wePickANumber = () => {
        setWePickANumberShow(true)
    }

    return (
        <main className="flex flex-col items-center bg-background-default h-screen gap-4 p-4">
            <h1 className="text-accent-main text-6xl font-bold">Welcome to CityQuest</h1>
            <p className="text-gray-600 text-center max-w-md text-md font-semibold">
                Explore your city, earn rewards, and unlock new adventures!
            </p>

            {/* Map Container with overlayed button(s) */}
            <div className="relative w-[80%] h-[30%]">
                <MapContainer
                    center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-full w-full rounded-md z-0"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />
                </MapContainer>

                {/* Overlay Buttons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center space-y-2">
                    {!showSplitButtons && (
                        <motion.button
                            className="flex flex-row items-center gap-3 bg-accent-light text-white px-4 py-2 rounded-2xl shadow-md hover:bg-accent-dark"
                            onClick={() => setShowSplitButtons(true)}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaPlay className="w-4 h-4" />
                            Start Quest
                        </motion.button>
                    )}

                    <AnimatePresence>
                        {showSplitButtons && (
                            <>
                                <motion.button
                                    key="preferences"
                                    className="bg-accent-dark text-white px-4 py-2 rounded-xl shadow-md"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={promptHandler}
                                >
                                    Enter Preferences
                                </motion.button>

                                <motion.button
                                    key="sidequest"
                                    className="bg-accent-dark text-white px-4 py-2 rounded-xl shadow-md"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={randomSideQuestHandler}
                                >
                                    Today's Side Quest
                                </motion.button>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col md:flex-row gap-4 w-[80%] justify-center">
                <Card title="Level 12" desc="Explorer">
                    <FaStar className="text-accent-light w-7 h-7" />
                </Card>
                <Card title="2450 XP" desc="Experience">
                    <FaTrophy className="text-accent-light w-7 h-7" />
                </Card>
                <Card title="28" desc="Places Visited">
                    <FaMapLocation className="text-accent-light w-7 h-7" />
                </Card>
                <Card title="#42" desc="Ranking">
                    <FaCrown className="text-accent-light w-7 h-7" />
                </Card>
            </div>

            {/* Clickable Cards */}
            <div className="flex flex-col md:flex-row gap-4 w-[80%] justify-center">
                <CardClickable title="Questionnaire" link="/questionnaire">
                    <FaClipboard className="text-accent-dark w-7 h-7" />
                </CardClickable>
                <CardClickable title="Preferences" link="/settings">
                    <FaSliders className="text-accent-dark w-7 h-7" />
                </CardClickable>
                <CardClickable title="History" link="/history">
                    <FaHistory className="text-accent-dark w-7 h-7" />
                </CardClickable>
                <CardClickable title="Leaderboard" link="/leaderboard">
                    <FaRankingStar className="text-accent-dark w-7 h-7" />
                </CardClickable>
            </div>

            {/* Recent Activity */}
            <div className="text-left w-[80%]">
                <h2 className="text-2xl text-accent-dark font-bold text-left">Recent Activity</h2>
            </div>
            <RecentActivity />

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-80">
                        {userPicksANumberShow && (
                            <UserPicksNumber setShowModal={setShowModal}/>
                        )}

                        {wePickANumberShow && (
                            <WePickNumber setShowModal={setShowModal}/>
                        )}

                        {!userPicksANumberShow && !wePickANumberShow && (
                            <>
                                <h2 className="text-xl font-bold mb-4 text-accent-dark">Tic Tac Toe</h2>
                                <p className="text-sm font-semibold text-gray-400 text-center">If you win, you pick the
                                    amount of places for today's quest.</p>
                                <p className="text-sm font-semibold text-gray-400 text-center">If we win, we pick.</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {board.map((cell, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleClick(index)}
                                            className="w-20 h-20 border-2 text-2xl font-bold flex items-center justify-center"
                                        >
                                            {cell}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="mt-4 bg-accent-main text-white px-4 py-2 rounded hover:bg-accent-dark"
                                >
                                    Close
                                </button>
                            </>
                        )}

                    </div>
                </div>
            )}
        </main>
    );
};

export default HomePage;
