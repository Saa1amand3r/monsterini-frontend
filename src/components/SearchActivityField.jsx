import { FaSearch } from "react-icons/fa";

const SearchField = ({ placeholder, setPrompt }) => {
    const textInput = (e) => {
        setPrompt(e.target.value);
    };

    return (
        <div className="flex flex-row gap-2 bg-white p-2 items-center border-2 border-gray-400 focus-within:border-none rounded-xl transition-all focus-within:ring-2 focus-within:ring-orange-400">
            <FaSearch className="text-gray-400 w-5 h-5" />
            <input
                className="text-gray-400 outline-none"
                placeholder={placeholder}
                onChange={textInput}
            />
        </div>
    );
};

export default SearchField;
