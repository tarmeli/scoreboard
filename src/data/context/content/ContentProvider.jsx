import React, { createContext, useContext, useEffect, useState } from "react";
import callApi from "../../utils/callApi/callApi";

const ContentContext = createContext({});

export const dependencies = {
    callApi,
};

const ContentProvider = ({ route, children }) => {
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        dependencies.callApi(route).then(({ data }) => {
            setContent(data.content);
            setIsLoading(false);
        });
    }, []);

    return (
        <ContentContext.Provider value={{ content, isLoading }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
