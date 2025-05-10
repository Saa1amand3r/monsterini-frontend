import { useState } from "react";

const UserPickNumber = ({ setShowModal,onConfirm }) => {
    const [number, setNumber] = useState("");

    const handleConfirm = () => {
        const value = parseInt(number, 10);
        if (value >= 1 && value <= 5) {
            onConfirm(value);
        } else {
            alert("Please enter a number between 1 and 5.");
        }
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold text-accent-dark">You Win!</h2>
            <p className="text-gray-600 text-center text-sm font-semibold">
                Enter how many places you want to visit for today’s quest (1-5).
            </p>
            <input
                type="number"
                min={1}
                max={5}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 w-20 text-center text-lg font-semibold"
            />
            <button
                onClick={handleConfirm}
                className="bg-accent-main text-white px-4 py-2 rounded hover:bg-accent-dark"
            >
                Confirm
            </button>
            <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-accent-main text-white px-4 py-2 rounded hover:bg-accent-dark"
            >
                Close
            </button>
        </div>
    );
};

export default UserPickNumber;
