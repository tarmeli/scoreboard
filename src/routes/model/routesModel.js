import Home from "../screens/home/Home";
import Players from "../screens/players/Players";

const routesModel = [
  {
    name: "Home",
    route: "/",
    Screen: Home,
    description: "Houston table tennis scoreboard",
  },
  {
    name: "Players",
    route: "/players",
    Screen: Players,
    description: "Players page",
  },
];

export default routesModel;
