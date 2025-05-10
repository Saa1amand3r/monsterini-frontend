import {useState} from "react";

const TimeFilters = ({setTimeGap}) => {
    const [currentTimeGap, setCurrentTimeGap] = useState(0)
    return (
        <div className="flex flex-row gap-4">
            <button onClick={() => setCurrentTimeGap(0)} className={`px-6 py-4 ${currentTimeGap === 0 ? 'bg-accent-dark' : ''} rounded-xl hover:bg-opacity-50 hover:bg-accent-dark bg-opacity-50 text-accent-dark`}>
                All
            </button>
            <button onClick={() => setCurrentTimeGap(1)} className={`px-6 py-4 ${currentTimeGap === 1 ? 'bg-accent-dark' : ''} rounded-xl hover:bg-accent-dark hover:bg-opacity-50 bg-opacity-50 text-accent-dark`}>
                This Week
            </button>
            <button onClick={() => setCurrentTimeGap(2)} className={`px-6 py-4 ${currentTimeGap === 2 ? 'bg-accent-dark' : ''} rounded-xl hover:bg-accent-dark hover:bg-opacity-50 bg-opacity-50 text-accent-dark`}>
                This Month
            </button>
        </div>
    )
}
export default TimeFilters;