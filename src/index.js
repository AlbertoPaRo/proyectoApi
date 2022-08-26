const express = require("express");

const app = express();
const miMiddleware = (req, res, next) => {
  if (req.method === "GET") {
    console.log(req.method);
    console.log("hola mundo");
  } else {
    res.send("method no permitido");
  }
  next();
};

app.get("/", miMiddleware, function (req, res) {
  res.send("maik se esta emputando");
});

app.use(miMiddleware);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
