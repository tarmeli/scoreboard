import React from "react";
import Div from "../Element/Div/Div";

const ErrorTentative = ({ isError, message, children }) =>
    isError ? <Div>{message}</Div> : <Div>{children}</Div>;

export default ErrorTentative;
