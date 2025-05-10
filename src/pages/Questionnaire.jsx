import React, {useState} from "react";
import {
    FaBasketballBall,
    FaBriefcase,
    FaCoffee,
    FaLandmark,
    FaQuestion,
    FaShoppingBag,
    FaTree,
    FaUser,
    FaUserAltSlash,
    FaUserClock,
    FaUserGraduate,
    FaUserTie,
    FaUtensils
} from "react-icons/fa";
import {MdMuseum, MdNightlife} from "react-icons/md";

const PLACE_TYPE_ICONS = [
    {type: "Cafés & Coffee Shops", icon: <FaCoffee/>},
    {type: "Restaurants", icon: <FaUtensils/>},
    {type: "Parks & Green Spaces", icon: <FaTree/>},
    {type: "Museums & Galleries", icon: <MdMuseum/>},
    {type: "Historical Landmarks", icon: <FaLandmark/>},
    {type: "Shopping (Stores, Malls, Boutiques)", icon: <FaShoppingBag/>},
    {type: "Nightlife (Bars, Clubs)", icon: <MdNightlife/>},
    {type: "Sports & Recreation", icon: <FaBasketballBall/>},
    {type: "Other", icon: <FaQuestion/>}
];

const AGE_RANGES = [
    "14-19", "20-25", "26-30", "31-40", "41-50", "51+"
];

const OCCUPATION_ICONS = [
    {occ: "Student", icon: <FaUserGraduate/>},
    {occ: "Full-Time Worker", icon: <FaBriefcase/>},
    {occ: "Part-Time Worker", icon: <FaUserClock/>},
    {occ: "Freelancer", icon: <FaUserTie/>},
    {occ: "Intern", icon: <FaUser/>},
    {occ: "Unemployed", icon: <FaUserAltSlash/>}
];

const QuestionnairePage = ({session}) => {
    const [form, setForm] = useState({
        placeTypes: [],
        ageRange: "",
        occupation: "",
        usualPlaces: ""
    });
    const [status, setStatus] = useState(null);

    const handlePlaceTypeClick = (type) => {
        setForm((prev) => ({
            ...prev,
            placeTypes: prev.placeTypes.includes(type)
                ? prev.placeTypes.filter((pt) => pt !== type)
                : [...prev.placeTypes, type]
        }));
    };

    const handleOccupationClick = (occ) => {
        setForm((prev) => ({
            ...prev,
            occupation: prev.occupation === occ ? "" : occ
        }));
    };

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...form,
                user: { id: session }
            };

            const res = await fetch("http://localhost:8080/api/questionnaire", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error("Request failed");

            const data = await res.json();
            setStatus({success: true, message: "Submitted successfully!"});
            console.log("Submitted successfully:", data);
        } catch (error) {
            setStatus({success: false, message: "Submission failed!"});
            console.error("Error submitting questionnaire:", error);
        }
    };

    ;


        return (
            <main className="flex flex-col items-center bg-background-default min-h-screen p-2 sm:p-4">
                <h1 className="text-accent-main text-3xl sm:text-5xl font-bold mb-2 text-center">Questionnaire</h1>
                <p className="text-gray-600 text-center mb-4 sm:mb-6 max-w-md">
                    Tell us about your interests to personalize your CityQuest experience!
                </p>
                <form
                    className="bg-white rounded-xl shadow-lg p-4 sm:p-8 w-full max-w-lg flex flex-col gap-6"
                    onSubmit={handleSubmit}
                >
                    {/* Place Types with Icon Buttons */}
                    <div>
                        <label className="block text-base sm:text-lg font-semibold mb-2">Which types of places are you
                            most interested in visiting?</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {PLACE_TYPE_ICONS.map(({type, icon}) => (
                                <button
                                    key={type}
                                    type="button"
                                    className={`flex flex-col items-center justify-center w-full h-20 rounded-xl border-2 transition
                  ${form.placeTypes.includes(type)
                                        ? "bg-accent-main text-white border-accent-main shadow-lg"
                                        : "bg-white text-accent-main border-accent-main hover:bg-accent-light/20"}
                `}
                                    onClick={() => handlePlaceTypeClick(type)}
                                    aria-pressed={form.placeTypes.includes(type)}
                                >
                                    <span className="text-2xl mb-1">{icon}</span>
                                    <span className="text-xs text-center">{type.split(" ")[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Age Range as Dropdown */}
                    <div>
                        <label className="block text-base sm:text-lg font-semibold mb-2">Age Range</label>
                        <select
                            name="ageRange"
                            value={form.ageRange}
                            onChange={handleChange}
                            className="w-full rounded-md border p-2"
                            required
                        >
                            <option value="">Select age range...</option>
                            {AGE_RANGES.map((range) => (
                                <option key={range} value={range}>
                                    {range}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Occupation with Icon Buttons */}
                    <div>
                        <label className="block text-base sm:text-lg font-semibold mb-2">Occupation</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {OCCUPATION_ICONS.map(({occ, icon}) => (
                                <button
                                    key={occ}
                                    type="button"
                                    className={`flex flex-col items-center justify-center w-full h-20 rounded-xl border-2 transition
                  ${form.occupation === occ
                                        ? "bg-accent-main text-white border-accent-main shadow-lg"
                                        : "bg-white text-accent-main border-accent-main hover:bg-accent-light/20"}
                `}
                                    onClick={() => handleOccupationClick(occ)}
                                    aria-pressed={form.occupation === occ}
                                >
                                    <span className="text-2xl mb-1">{icon}</span>
                                    <span className="text-xs text-center">{occ.split(" ")[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Usual Places */}
                    <div>
                        <label className="block text-base sm:text-lg font-semibold mb-2">What places do you usually go
                            to?</label>
                        <textarea
                            name="usualPlaces"
                            value={form.usualPlaces}
                            onChange={handleChange}
                            className="w-full rounded-md border p-2"
                            rows={3}
                            placeholder="E.g. parks, cafes, libraries..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-accent-main text-white px-6 py-2 rounded-lg font-bold hover:bg-accent-dark transition"
                    >
                        Submit
                    </button>
                    {status && (
                        <div
                            className={`mt-2 text-center font-semibold ${status.success ? "text-green-600" : "text-red-600"}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </main>
        );
    };

    export default QuestionnairePage;
