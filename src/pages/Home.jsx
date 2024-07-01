import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
    return (
        <div className={"w-full p-2 xs:flex xs:flex-col"}>
            <div className="flex flex-col gap-6 items-center justify-center px-6 mt-[40px] xs:text-center">
                <p className="capitalize text-2xl sm:text-3xl md:text-4xl">
                    welcome to the{" "}
                    <strong className="text-orange-600">Country Compass</strong>{" "}
                    website
                </p>
                <p className="text-gray-700 capitalize sm:text-lg md:text-xl">
                    find out informations about any country you want
                </p>
                <Link to="/Search">
                    <button className="border py-3 px-4 bg-cyan-500 rounded-xl text-gray-100">
                        Start searching
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
