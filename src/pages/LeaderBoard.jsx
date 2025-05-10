import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const LeaderboardPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/users/leaderboard")
            .then(res => res.json())
            .then(setUsers)
            .catch(err => console.error("Failed to fetch leaderboard:", err));
    }, []);

    const podiumHeights = ["h-24", "h-32", "h-20"]; // 2nd, 1st, 3rd

    return (
        <main className="flex flex-col items-center bg-background-default min-h-screen p-4">
            <h1 className="text-accent-main text-5xl font-bold mb-4">Leaderboard</h1>
            <p className="text-gray-600 mb-6 text-center max-w-lg">
                See the top explorers in the CityQuest community!
            </p>

            {/* Podium */}
            {users.length >= 3 && (
                <div className="flex justify-center items-end gap-8 w-full max-w-4xl mb-12">
                    {[1, 0, 2].map((pos, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div
                                className={`bg-white rounded-t-md shadow-md w-28 ${podiumHeights[i]} flex items-center justify-center`}
                            >
                                {i === 1 && <FaStar className="text-yellow-400 w-6 h-6"/>} {/* Center = 1st place */}
                                {i === 0 && <FaStar className="text-gray-400 w-6 h-6"/>} {/* Left = 2nd place */}
                                {i === 2 && <FaStar className="text-amber-700 w-6 h-6"/>} {/* Right = 3rd place */}
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-accent-main font-semibold">{users[pos].userName}</p>
                                <p className="text-gray-500 text-sm">XP: {users[pos].xp}</p>
                            </div>
                        </div>
                    ))}
                </div>

            )}

            {/* Remaining Users */}
            <div className="w-full max-w-2xl">
                {users.length <= 3 ? (
                    <p className="text-gray-500 text-center">Not enough users yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {users.slice(3).map((user, index) => (
                            <li
                                key={user.id}
                                className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-xl font-bold text-gray-500">#{index + 4}</span>
                                    <div>
                                        <p className="text-lg font-semibold text-accent-main">{user.userName}</p>
                                        <p className="text-sm text-gray-400">XP: {user.xp}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Link to="/" className="mt-8 text-accent-dark hover:underline">← Back to Home</Link>
        </main>
    );
};

export default LeaderboardPage;
