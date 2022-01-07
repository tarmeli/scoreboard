import React from "react";
import { Div } from "../Element/";

const ErrorTentative = ({ isError, message, children }) =>
    isError ? <Div>{message}</Div> : <Div>{children}</Div>;

export default ErrorTentative;
