import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import RoutesProvider from "./routes/context/provider/RoutesProvider";
import Typography from "./components/Typography/Typography";

const App = () => (
  <Typography fullWidth flexContainer>
    <RoutesProvider>
      <Router>
        <Routes />
      </Router>
    </RoutesProvider>
  </Typography>
);

export default App;
