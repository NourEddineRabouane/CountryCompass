import { useState } from "react";
import { useAxios } from "./useAxios";

const Search = () => {
    const [ cityName , setCityName ] = useState("");
    const [ search , setSearch ] = useState(false);
    const [ data , isLoading , error ] = useAxios( cityName , search , setSearch );
    return (
        <div className="text-black">
            {/* the search input block */}
            <div className="grid  grid-cols-3 mx-2 border border-gray-300 rounded overflow-hidden shadow-md text-gray-700">
                <input
                    className="py-3 pl-3 col-start-1 col-end-3 outline-none "
                    type="text"
                    placeholder="type the name of the country..."
                    onChange={(event) => {
                        setCityName(event.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        setSearch(true);
                    }}
                    className="fa-solid fa-magnifying-glass py-3 bg-[#3f83f8] hover:bg-[#76a9fa]"
                ></button>
            </div>

            {/* country informations block */}
            <div>
                {isLoading && <h1 className="text-gray-600">Loading...</h1>}
                {data && <div className="image-container">
                    <img src={data.flags.png} alt="" />
                </div> }

                {/* table of information */}
               {data && <table>
                    <tbody>
                        <tr>
                            <th>Common name </th>
                            <td>{data.name.common}</td>
                        </tr>
                        <tr>
                            <th>Official name </th>
                            <td>{data.name.official}</td>
                        </tr>
                        <tr>
                            <th>Capital </th>
                            <td>{data.capital}</td>
                        </tr>
                        <tr>
                            <th>Continent </th>
                            <td>{data.continents}</td>
                        </tr>
                        <tr>
                            <th>Population </th>
                            <td>{data.population}</td>
                        </tr>
                        <tr>
                            <th>Area </th>
                            <td>{data.area} km<sup>2</sup></td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        </div>
    );
};

export default Search;


