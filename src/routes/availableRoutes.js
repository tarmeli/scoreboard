import Matches from "../screens/matches/Matches";
import Players from "../screens/players/Players";

const matches = {
    name: "Matches",
    route: "/",
    screenComponent: Matches,
    description: "Matches page",
};

const players = {
    name: "Players",
    route: "/players",
    screenComponent: Players,
    description: "Players page",
};

const availableRoutes = [matches, players];

export default availableRoutes;
