import React from "react";
import { Div } from "../Element/";

const LoadingTentative = ({ isLoading, children }) =>
    isLoading ? <Div>Loading...</Div> : <Div>{children}</Div>;

export default LoadingTentative;
