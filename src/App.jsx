import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import Navigation from "./components/Navigation/Navigation";
import RoutesProvider from "./routes/context/provider/RoutesProvider";

const App = () => (
  <RoutesProvider>
    <Router>
      <Navigation />

      <Routes />
    </Router>
  </RoutesProvider>
);

export default App;
