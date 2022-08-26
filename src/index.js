const { request } = require("express");
const express = require("express");

const app = express();
const mimiddleware = (req, res, next) => {
  if (req.method === "GET") {
    console.log(req.method);
    console.log("hola mundo");
  } else {
    res.send("metodo no permitido");
  }
  next();
};

app.get("/", mimiddleware, function (req, res) {
  res.send("maik se esta emputando");
});

app.use(mimiddleware);
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
