import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./pages/Footer";
import { useState } from "react";

function App() {
    const [screenSize, setScreensize] = useState(window.innerWidth);
    const [isMenuVisible, setIsMenuVisible] = useState((screenSize > 440)? true : false);

    window.onresize = () => {
        setScreensize(window.innerWidth);
        if (screenSize > 440 )
            setIsMenuVisible(true);
        else 
            setIsMenuVisible(false)
    };
    return (
        <div className="font-['Rubik'] bg-[#ebeae881] h-[100%]  min-h-[100vh] relative">
            <div className="lg:w-[90%] lg:m-auto lg:relative lg:h-[100%] lg:min-h-[100vh]">
                <Router>
                    <Header
                        screenSize={screenSize}
                        isMenuVisible={isMenuVisible}
                        setIsMenuVisible={setIsMenuVisible}
                    />

                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/Search">
                            <Search />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default App;
