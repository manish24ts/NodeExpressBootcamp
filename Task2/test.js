import http from "http";

const urls = [
    "http://localhost:3000/success",
    "http://localhost:3000/not-found",
    "http://localhost:3000/server-error",
];

urls.forEach((url) => {
    http.get(url, (res) => {
        console.log(`URL: ${url} - Status Code: ${res.statusCode}`);
    }).on("error", (err) => {
        console.error(`Error fetching ${url}: ${err.message}`);
    });
});
