import Players from "../screens/players/Players";
import Home from "../screens/home/Home";
import { map } from "lodash/fp";

const routes = {
    home: {
        name: "Home",
        route: "/",
        screenComponent: Home,
        description: "Houston table tennis scoreboard",
    },

    players: {
        name: "Players",
        route: "/players",
        screenComponent: Players,
        description: "Players page",
    },
};

const availableRoutes = map((route) => ({ ...route }), routes);

export default availableRoutes;
