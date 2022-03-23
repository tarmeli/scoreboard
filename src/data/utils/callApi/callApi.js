const callApi = async (route, method) => {
  try {
    const response = await fetch(`http://localhost:4000${route}`, {
      method,
    });

    const {
      data,
      error: { isError, message },
    } = await response.json();

    if (isError) {
      return { callWasSuccessful: false, error: { isError, message } };
    }

    return {
      callWasSuccessful: true,
      data,
      error: {
        isError: false,
        message: "",
      },
    };
  } catch (error) {
    return { callWasSuccessful: false, error: { isError: true, error } };
  }
};

export default callApi;
