import React from "react";
import Div from "../Element/Div/Div";

const LoadingTentative = ({ isLoading, children }) =>
    isLoading ? <Div>Loading...</Div> : <Div>{children}</Div>;

export default LoadingTentative;
