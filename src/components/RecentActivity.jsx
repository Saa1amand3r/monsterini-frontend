import SearchActivityField from "./SearchActivityField";
import TimeFilters from "./TimeFilters";
import ActivityListElement from "./ActivityListElement";
import { FaTree, FaUniversity, FaUtensils } from "react-icons/fa";

const RecentActivity = () => {
    return (
        <section className="flex flex-col rounded-xl bg-white w-full max-w-xl mx-auto px-2 sm:px-6 py-4 shadow">
            {/* Search and Filters */}
            <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-stretch sm:items-center mb-4">
                <SearchActivityField placeholder="Search history..." />
                <TimeFilters />
            </div>
            {/* Activity List */}
            <ul className="space-y-2">
                <li>
                    <ActivityListElement title="Italian Restaurant" type="Restaurant" date="May 10, 2025" xp="100">
                        <FaUtensils className="text-accent-light w-7 h-7" />
                    </ActivityListElement>
                </li>
                <li>
                    <ActivityListElement title="Central park" type="Parks & Green Spaces" date="May 9, 2025" xp="75">
                        <FaTree className="text-accent-light w-7 h-7" />
                    </ActivityListElement>
                </li>
                <li>
                    <ActivityListElement title="History Museum" type="Museums & Galleries" date="May 8, 2025" xp="150">
                        <FaUniversity className="text-accent-light w-7 h-7" />
                    </ActivityListElement>
                </li>
            </ul>
        </section>
    );
};

export default RecentActivity;
