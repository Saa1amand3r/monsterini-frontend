import React from "react";
import {Link} from "react-router-dom";

const CardClickable = ({ title, desc, link, children }) => {
    return (
        <Link
            to={link}
            className="bg-white shadow rounded-lg text-center flex flex-col justify-center px-6 py-8 items-center flex-1 min-w-[200px] hover:shadow-lg transition"
        >
            <div className="flex justify-center items-center mb-2">
                {children}
            </div>
            <p className="text-accent-dark text-sm sm:text-base font-bold break-words leading-tight">
                {title}
            </p>
            {desc && (
                <p className="text-xs sm:text-sm text-gray-700 mt-1 break-words text-center">
                    {desc}
                </p>
            )}
        </Link>
    );
};

export default CardClickable;
