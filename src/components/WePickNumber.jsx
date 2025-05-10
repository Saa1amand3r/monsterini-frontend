import { useEffect, useState } from "react";

const WePickANumber = ({setShowModal, onConfirm}) => {
    const [spinning, setSpinning] = useState(true);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [displayNumber, setDisplayNumber] = useState(1);
    const [disableConfirm, setDisableConfirm] = useState(true)

    const handleConfirm = () => {
        onConfirm(selectedNumber);
    };

    useEffect(() => {
        let interval;
        if (spinning) {
            let count = 0;
            interval = setInterval(() => {
                setDisplayNumber(prev => (prev % 5) + 1);
                count++;

                // After about 2 seconds, stop spinning
                if (count > 20) {
                    clearInterval(interval);
                    const finalNumber = Math.floor(Math.random() * 5) + 1;
                    setSelectedNumber(finalNumber);
                    setDisplayNumber(finalNumber);
                    setDisableConfirm(false);
                    setSpinning(false);
                }
            }, 100);
        }

        return () => clearInterval(interval);
    }, [spinning]);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-accent-dark">We Picked a Number!</h2>
            <div
                className="w-32 h-32 border-4 border-accent-main rounded-full flex items-center justify-center text-4xl font-bold text-accent-main shadow-lg mb-4 animate-spin-slow">
                {displayNumber}
            </div>
            {!spinning && (
                <p className="text-lg font-semibold text-gray-600">
                    Today's quest will have <span className="text-accent-main">{selectedNumber}</span> locations!
                </p>
            )}

            <button
                onClick={handleConfirm}
                className={`disabled:bg-opacity-40 disabled:text-opacity-40 bg-accent-main text-white px-4 py-2 rounded hover:bg-accent-dark`}
                disabled={disableConfirm}
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

export default WePickANumber;
