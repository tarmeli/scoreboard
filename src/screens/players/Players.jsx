import React from "react";
import Div from "../../components/Element/Div/Div";

import players from "../../data/stubs/players";
import Ul from "../../components/Element/List/Ul/Ul";
import Map from "../../components/Utility/Map/Map";
import Li from "../../components/Element/List/Li/Li";

const Players = () => (
    <Div>
        <Ul>
            <Map items={players}>
                {({ name, wins, losses }) => (
                    <Li>
                        {name}, wins {wins} - losses {losses}
                    </Li>
                )}
            </Map>
        </Ul>
    </Div>
);

export default Players;
