require("dotenv").config();
const express = require("express");
const engine = require("ejs-mate");

const app = express();
const port = process.env.PORT;

app.engine("ejs", engine);
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
