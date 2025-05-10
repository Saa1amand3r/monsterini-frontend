import SearchActivityField from "./SearchActivityField";
import TimeFilters from "./TimeFilters";
import ActivityListElement from "./ActivityListElement";
import {FaTree, FaUniversity, FaUtensils} from "react-icons/fa";

const RecentActivity = () => {
    return (
        <section className="flex rounded-xl flex-col bg-white px-8 py-4 w-[80%]">
            <div className="flex flex-col md:flex-row justify-between">
                <SearchActivityField placeholder="Search history..."/>
                <TimeFilters/>
            </div>
            <div>
                <ul>
                    <li>
                        <ActivityListElement title="Italian Restaurant" type="Restaurant" date="May 10, 2025" xp="100">
                            <FaUtensils className="text-accent-light w-7 h-7"/>
                        </ActivityListElement>
                    </li>
                    <li>
                        <ActivityListElement title="Central park" type="Parks & Green Spaces" date="May 9, 2025" xp="75">
                            <FaTree className="text-accent-light w-7 h-7"/>
                        </ActivityListElement>
                    </li>
                    <li>
                        <ActivityListElement title="History Museum" type="Museums & Galleries" date="May 8, 2025" xp="150">
                            <FaUniversity className="text-accent-light w-7 h-7"/>
                        </ActivityListElement>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default RecentActivity;