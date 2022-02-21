const fs = require("fs");

exports.init = () => {
    const html = fs.readFileSync("./index.html");
    http.createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html)
        response.end();
        fs.readFile("./index.html", (err, obj) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(obj)
            }
            response.end();
        });

    }).listen(1111);
}; 
