import axios from "axios";
import {useEffect, useState} from "react";

const AcceptanceList = ({points, session, setHideMap, setXp}) => {
    const [listHidden, setListHidden] = useState(false);
    const [counter, setCounter] = useState(0)
    const accept = async (id) => {
        const data = {
            "userId": session.id,
            "pointId": id
        }

        const response = await axios.post("http://localhost:8080/api/users/award", data);
        if (response.status !== 200) {
            alert("Error occured! Try to reload the page.")
            return;
        }
        const element = document.getElementById(id);
        // points.forEach((point) => {
        //     if (point.id === id) {
        //         points.splice(points.indexOf(point),1)
        //     }
        // })
        setCounter((prev) => prev+1)
        if (counter === points.length) {
            setListHidden(true);
        }
        element.classList.add("hidden");
        setXp((prev) => prev +100)
    }

    useEffect(() => {
        if (points.length === 0) {
            setListHidden(true);
        }
    }, [points])



    console.log(points)
    return (
        <div className={`${listHidden ? 'hidden' : ''} w-[80%] flex flex-col bg-white rounded-xl px-4 py-2`}>
            {points.map(point => (
                <div id={point.id} key={point.id} className="flex flex-row justify-between items-center font-semibold">
                    <div className="flex flex-row gap-4">
                        <p>{JSON.parse(point.tags).name}</p>
                        <p>100 XP</p>
                    </div>
                    <button className="text-white bg-accent-main rounded-xl px-4 py-2" onClick={() => accept(point.id)}>Accept</button>
                </div>
            ))}
            {counter === points.length && (
                <>
                    {setHideMap(true)}
                    <p className="text-accent-main text-center font-semibold">Congratulations! You completed today's quests!</p>
                </>
            )}
        </div>
    )
}

export default AcceptanceList