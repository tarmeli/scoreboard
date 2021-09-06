import callApi from "./callApi";

describe("callApi", () => {
    const realFetch = global.fetch;

    afterEach(() => {
        global.fetch = realFetch;
    });

    it("given fetch returns data, when called, returns fetched data", async () => {
        global.fetch = () =>
            Promise.resolve({
                json: () => Promise.resolve({ data: "Some data" }),
            });

        const actual = await callApi().then((response) => {
            return response;
        });

        expect(actual).toMatchSnapshot();
    });

    it("given fetch returns error, when called, returns error", async () => {
        global.fetch = () =>
            Promise.resolve({
                json: () => Promise.reject("Some error message"),
            });

        const actual = await callApi().then((response) => {
            return response;
        });

        expect(actual).toMatchSnapshot();
    });
});
