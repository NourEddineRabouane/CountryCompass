const Search = () => {
    return (
        <div className="text-black">
            <div className="grid  grid-cols-3 mx-2 border border-gray-300 rounded overflow-hidden shadow-md text-gray-700">
                <input
                    className="py-3 pl-3 col-start-1 col-end-3 outline-none "
                    type="text"
                    placeholder="type the name of the country..."
                />
                <button className="fa-solid fa-magnifying-glass py-3 bg-[#3f83f8] hover:bg-[#76a9fa]"></button>
            </div>
        </div>
    );
};

export default Search;
