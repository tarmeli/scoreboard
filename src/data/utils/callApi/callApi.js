const callApi = async (route) => {
    try {
        return await fetch(`http://localhost:4000${route}`)
            .then((response) => response.json())
            .then((data) => ({
                callWasSuccessful: true,
                data,
            }));
    } catch (error) {
        return { callWasSuccessful: false, error };
    }
};

export default callApi;
