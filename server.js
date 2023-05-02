const next = require("next");
const http = require("http");
const url = require("url");
const pathMatch = require("path-match");

const app = next({ dev: false });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const route = pathMatch();

      handle(req, res, parsedUrl);
    })
    .listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
      console.log(`> PORT environment variable: ${process.env.PORT}`);
    });
});
