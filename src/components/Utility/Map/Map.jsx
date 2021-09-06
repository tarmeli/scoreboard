import React from "react";

const WrapWithKey = ({ children }) => children;

const Map = ({ items, children: toChild }) => {
    return items.map((item, index) => (
        <WrapWithKey key={index}>{toChild(item)}</WrapWithKey>
    ));
};

export default Map;
