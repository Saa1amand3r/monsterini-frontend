import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ session, setSession }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setSession(null);
        setIsOpen(false);
        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#fdf3e6] border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
                {/* Logo / Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-accent-main tracking-tight">
                        Monsterini <span className="font-normal">side questini</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 text-base font-medium">
                    <li>
                        <Link to="/" className="hover:text-accent-main transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard" className="hover:text-accent-main transition">Leaderboard</Link>
                    </li>
                    {!session && (
                        <>
                            <li>
                                <Link to="/register" className="hover:text-accent-main transition">Register</Link>
                            </li>
                            <li>
                                <Link to="/login" className="hover:text-accent-main transition">Login</Link>
                            </li>
                        </>
                    )}
                    {session && (
                        <>
                            <li className="text-sm font-semibold text-gray-700">Hello, {session.userName}!</li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="bg-accent-main text-white rounded-full px-4 py-1 font-semibold hover:bg-accent-dark transition"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-accent-main"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center gap-3 pb-4 bg-[#fdf3e6] shadow">
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded hover:bg-accent-light/20 transition"
                              onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard" onClick={() => setIsOpen(false)}>Leaderboard</Link>
                    </li>
                    {!session && (
                        <>
                            <li>
                                <Link to="/register"
                                      className="block py-2 px-4 rounded hover:bg-accent-light/20 transition"
                                      onClick={() => setIsOpen(false)}>Register</Link>
                            </li>
                            <li>
                                <Link to="/login"
                                      className="block py-2 px-4 rounded hover:bg-accent-light/20 transition"
                                      onClick={() => setIsOpen(false)}>Login</Link>
                            </li>
                        </>
                    )}
                    {session && (
                        <>
                            <li className="text-sm font-semibold text-gray-700">Hello, {session.userName}!</li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="bg-accent-main text-white rounded-full px-4 py-1 font-semibold hover:bg-accent-dark transition"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
