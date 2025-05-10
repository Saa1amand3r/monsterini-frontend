import {FaCircle} from "react-icons/fa";

const ActivityListElement = ({ title,type,date,xp,children }) => {
    return (
        <div className="flex flex-row justify-between hover:bg-accent-dark hover:bg-opacity-20 mt-4 items-center rounded-xl px-3">
            <div className="flex flex-row gap-4 items-center">
                {children}
                <div className="flex flex-col">
                    <h4 className="font-bold">{title}</h4>
                    <div className="text-gray-500 font-semibold flex flex-row items-center gap-2">
                        <p>{type}</p>
                        <FaCircle className="w-1 h-1"/>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
            <p className="text-accent-light font-bold">+{xp} XP</p>
        </div>
    )
}

export default ActivityListElement;