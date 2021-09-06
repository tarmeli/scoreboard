import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Navigation from "./components/Navigation/Navigation";

const App = () => (
    <Router>
        <Navigation />

        <Routes />
    </Router>
);

export default App;
