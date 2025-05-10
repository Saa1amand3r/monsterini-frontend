import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {FaClipboard, FaCrown, FaHistory, FaMapPin, FaPlay, FaStar, FaTrophy} from "react-icons/fa";
import Card from "../components/Card";
import {FaMapLocation, FaRankingStar, FaSliders} from "react-icons/fa6";
import CardClickable from "../components/CardClickable";

const HomePage = () => {
    return (
        <main className="flex flex-col items-center bg-background-default h-screen gap-4 p-4">
            <h1 className="text-accent-main text-6xl font-bold">Welcome to CityQuest</h1>
            <p className="text-gray-600 text-center max-w-md">
                Explore your city, earn rewards, and unlock new adventures!
            </p>

            {/* Map Container with overlayed button */}
            <div className="relative w-[50%] h-[30%]">
                {/* Map */}
                <MapContainer
                    center={[51.505, -0.09]} // Example: London
                    zoom={13}
                    scrollWheelZoom={false}
                    className="h-full w-full rounded-md z-0"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    />
                </MapContainer>

                {/* Centered Button */}
                <button className="flex flex-row items-center gap-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-light text-white px-4 py-2 rounded-2xl shadow-md hover:bg-accent-dark z-10">
                    <FaPlay className="w-4 h-4" />
                    Start Quest
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <Card title="Level 12" desc="Explorer">
                    <FaStar className="text-accent-light w-7 h-7" />
                </Card>
                <Card title="2450 XP" desc="Experience">
                    <FaTrophy className="text-accent-light w-7 h-7" />
                </Card>
                <Card title="28" desc="Places Visited">
                    <FaMapLocation className="text-accent-light w-7 h-7" />
                </Card>
                <Card title="#42" desc="Ranking">
                    <FaCrown className="text-accent-light w-7 h-7" />
                </Card>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <CardClickable title="Questionnaire" link="/questionnaire">
                    <FaClipboard className="text-accent-dark w-7 h-7" />
                </CardClickable>
                <CardClickable title="Preferences" link="/settings">
                    <FaSliders className="text-accent-dark w-7 h-7" />
                </CardClickable>
                <CardClickable title="History" link="/history">
                    <FaHistory className="text-accent-dark w-7 h-7" />
                </CardClickable>
                <CardClickable title="Leaderboard" link="/leaderboard">
                    <FaRankingStar className="text-accent-dark w-7 h-7" />
                </CardClickable>
            </div>

            <h2 className="text-2xl text-accent-dark font-bold text-left">Recent Activity</h2>

        </main>
    );
};

export default HomePage;
