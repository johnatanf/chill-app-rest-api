const express = require("express");
const path = require("path");
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
const subscriptionFeaturesRoutes = require("./routes/subscriptionfeatures.js");
const watchListRoutes = require("./routes/watchlists.js");
const watchHistoriesRoutes = require("./routes/watchhistories.js");
const contentDirectorRoutes = require("./routes/contentdirector.js");
const contentGenreRoutes = require("./routes/contentgenre.js");
const contentActorRoutes = require("./routes/contentactor.js");
const userAccountSubscriptionRoutes = require("./routes/useraccountsubscription.js");
const registerRoutes = require("./routes/register.js");
const loginRoutes = require("./routes/login.js");
const uploadRoutes = require("./routes/upload.js");
const verifyEmailRoutes = require("./routes/verifyemail.js");
const verifyToken = require("./middlewares/verifyToken.js");

const app = express();
const PORT = 5000;
const publicPath = path.join(__dirname, "public");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  if (err.parent && err.parent.errno === 1451) {
    res.status(400).json({ error: err.parent.sqlMessage });
  } else if (err.errors && err.errors[0]) {
    res.status(400).json({ error: err.errors[0].message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

app.use(bodyParser.json());

app.use(express.static(publicPath));
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
app.use("/subscriptionfeatures", subscriptionFeaturesRoutes);
app.use("/watchlists", verifyToken, watchListRoutes);
app.use("/watchhistories", watchHistoriesRoutes);
app.use("/contentdirector", contentDirectorRoutes);
app.use("/contentgenre", contentGenreRoutes);
app.use("/contentactor", contentActorRoutes);
app.use("/useraccountsubscription", userAccountSubscriptionRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/upload", verifyToken, uploadRoutes);
app.use("/verify-email", verifyEmailRoutes);
app.get("/", (req, res) => res.send("Chill Rest API"));
app.all("*", (req, res) => res.send("This route does not exist."));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
