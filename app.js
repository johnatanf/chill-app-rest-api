const express = require("express");
const bodyParser = require("body-parser");
const contentsRoutes = require("./routes/contents.js");
const watchListRoutes = require("./routes/watchlists.js");
const parentalRatingsRoutes = require("./routes/parentalratings.js");

const app = express();
const PORT = 5000;

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

app.use(bodyParser.json());

app.use("/contents", contentsRoutes);
app.use("/watchlists", watchListRoutes);
app.get("/", (req, res) => res.send("Chill Rest API"));
app.all("*", (req, res) => res.send("This route does not exist."));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
