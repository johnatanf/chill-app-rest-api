const express = require("express");
const bodyParser = require("body-parser");
const contentsRoutes = require("./routes/contents.js");
const parentalRatingsRoutes = require("./routes/parentalratings.js");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/contents", contentsRoutes);
app.get("/", (req, res) => res.send("Chill Rest API"));
app.all("*", (req, res) => res.send("This route does not exist."));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
