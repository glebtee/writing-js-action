const request = require("request-promise")

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JS action GitHub Skills course."
    },
    json: true
};

async function getAJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getAJoke;