import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({screenSize , isMenuVisible , setIsMenuVisible }) => {
    

    const showMenu = () => {
        if (screenSize < 440) setIsMenuVisible((prev) => !prev);
        else setIsMenuVisible(true);
    };

    return (
        <div className="bg-[#F7F9F2]">
            <header className="flex justify-between flex-col xs:flex-row px-1 py-3 xs:items-center">
                {/* the title and the icone */}
                <div className="flex items-center justify-between ">
                    <div className="title font-bold leading-loose text-xl">
                        Country Compass
                    </div>
                    <button
                        onClick={showMenu}
                        className={`fa-solid fa-bars text-[24px] ${
                            screenSize < 440 ? "" : "hidden"
                        }`}
                        aria-label="Toggle menu"
                    ></button>
                </div>

                {/* the menu */}
                <div
                    className={`px-1 menu  ${
                        isMenuVisible ? "block" : "hidden"
                    } `}
                >
                    <ul className="xs:flex xs:gap-4">
                        <li>
                            <Link to="/" className="hover:text-gray-500 ">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Search" className="hover:text-gray-500 ">
                                Search
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;
