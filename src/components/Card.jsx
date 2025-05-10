const Card = ({title, desc,children}) => {
    return (
        <div className="bg-white shadow rounded-lg text-center flex flex-col justify-center px-24 py-8">
            {/*<FaStar className="text-accent-light w-5 h-5" />*/}
            <div className="flex justify-center items-center mb-2">
                {children}
            </div>
            <p className="text-accent-dark text-xl font-bold">{title}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Card;