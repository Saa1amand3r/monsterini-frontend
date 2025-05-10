import {Link} from "react-router-dom";

const CardClickable = ({title,link,children}) => {
    return (
        <Link to={link} className="bg-white shadow rounded-lg text-center flex flex-col justify-center px-24 py-8 hover:bg-gray-100">
                <div className="flex justify-center items-center mb-2">
                    {children}
                </div>
                <p className="text-accent-dark text-xl font-bold">{title}</p>
        </Link>
    )
}

export default CardClickable;