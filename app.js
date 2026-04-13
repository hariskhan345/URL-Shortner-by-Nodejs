const express = require("express");
const path = require("path");
const ConectMongoDb = require("./connections");
const URLrouter = require("./routes/urlRoutes");
const StaticRouter = require("./routes/staticRouter");
const ShortURLModel = require("./models");

const app = express();
const PORT = 9000;

ConectMongoDb("mongodb://127.0.0.1:27017/ShortURL");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", URLrouter);
app.use("/", StaticRouter);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/:shortId", async (req, res) => {
  const shortID = req.params.shortId;

  const entry = await ShortURLModel.findOneAndUpdate(
    {
      ShortId: shortID,
    },
    {
      $push: {
        Visit_History: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  return res.redirect(entry.RedirectURl);
});

app.listen(PORT, () => console.log("Server Started....."));
