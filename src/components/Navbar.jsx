import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ session }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md px-4 py-3 flex items-center justify-between relative bg-background-default">
            <h2 className="text-xl font-bold">Monsterini side questini</h2>

            {/* Hamburger button */}
            <button
                className="md:hidden flex flex-col space-y-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
            </button>

            {/* Links */}
            <ul
                className={`${
                    isOpen ? "flex" : "hidden"
                } flex-col items-center text-center md:justify-left absolute top-16 left-1/2 -translate-x-1/2 w-[70%] md:translate-x-0 md:left-auto md:top-auto md:static md:flex-row md:flex md:items-center gap-4 md:gap-6 bg-white md:bg-transparent px-4 md:px-0 py-2 md:py-0 z-10`}
            >
                <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </li>
                {!session && (
                    <>
                        <li>
                            <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                        </li>
                    </>
                )}
                {session && (
                    <li className="text-sm font-medium">Hello, {session.userName}!</li>

                )}
            </ul>
        </nav>
    );
}

export default Navbar;
