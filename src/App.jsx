import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import RoutesProvider from "./routes/context/provider/RoutesProvider";

const App = () => (
  <RoutesProvider>
    <Router>
      <Routes />
    </Router>
  </RoutesProvider>
);

export default App;
