const callApi = async (route, method) => {
  try {
    const response = await fetch(`http://localhost:4000${route}`, {
      method,
    });

    const data = await response.json();

    return {
      callWasSuccessful: true,
      data,
    };
  } catch (error) {
    return { callWasSuccessful: false, error };
  }
};

export default callApi;
