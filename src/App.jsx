import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Navigation from "./components/Navigation/Navigation";
import PlayersProvider from "./data/context/players/PlayersProvider";

const App = () => (
    <Router>
        <Navigation />

        <PlayersProvider>
            <Routes />
        </PlayersProvider>
    </Router>
);

export default App;
