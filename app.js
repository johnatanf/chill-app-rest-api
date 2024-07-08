const express = require("express");
const bodyParser = require("body-parser");
const contentsRoutes = require("./routes/contents.js");
const parentalRatingsRoutes = require("./routes/parentalratings.js");
const actorsRoutes = require("./routes/actors.js");
const genresRoutes = require("./routes/genres.js");
const directorsRoutes = require("./routes/directors.js");
const seasonsRoutes = require("./routes/seasons.js");
const episodesRoutes = require("./routes/episodes.js");
const ratingsRoutes = require("./routes/ratings.js");
const userAccountsRoutes = require("./routes/useraccounts.js");
const paymentsRoutes = require("./routes/payments.js");
const paymentMethodsRoutes = require("./routes/paymentmethods.js");
const subscriptionsRoutes = require("./routes/subscriptions.js");
const watchListRoutes = require("./routes/watchlists.js");
const watchHistoriesRoutes = require("./routes/watchhistories.js");

const app = express();
const PORT = 5000;

const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  if (err.parent && err.parent.errno === 1451) {
    res.status(400).json({ error: err.parent.sqlMessage });
  } else if (err.errors && err.errors[0]) {
    res.status(400).json({ error: err.errors[0].message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

app.use(bodyParser.json());

app.use("/contents", contentsRoutes);
app.use("/parentalratings", parentalRatingsRoutes);
app.use("/actors", actorsRoutes);
app.use("/genres", genresRoutes);
app.use("/directors", directorsRoutes);
app.use("/seasons", seasonsRoutes);
app.use("/episodes", episodesRoutes);
app.use("/ratings", ratingsRoutes);
app.use("/useraccounts", userAccountsRoutes);
app.use("/payments", paymentsRoutes);
app.use("/paymentmethods", paymentMethodsRoutes);
app.use("/subscriptions", subscriptionsRoutes);
app.use("/watchlists", watchListRoutes);
app.use("/watchhistories", watchHistoriesRoutes);
app.get("/", (req, res) => res.send("Chill Rest API"));
app.all("*", (req, res) => res.send("This route does not exist."));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
