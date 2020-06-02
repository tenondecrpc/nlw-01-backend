import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Cristian", "Gerard", "Cesar"]);
});

app.listen(3333);
