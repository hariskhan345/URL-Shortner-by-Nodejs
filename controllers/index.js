const { nanoid } = require("nanoid");
const ShortURLModel = require("../models/index");

const getAllurls = async (req, res) => {
  if (!res.user) return res.redirect("/login");
  const Allrls = await ShortURLModel.find({ createdBy: res.user._id });
  return res.render("home", {
    allURLs: Allrls,
  });
};

const postURl = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required.." });
  }
  const shortID = nanoid(8);
  await ShortURLModel.create({
    ShortId: shortID,
    RedirectURl: body.url,
    Visit_History: [],
    createdBy: res.user._id,
  });

  return res.render("home", {
    id: shortID,
  });
};

const getURLAnalytics = async (req, res) => {
  const ShortId = req.params.shortId;
  console.log(ShortId);
  const result = await ShortURLModel.find({ ShortId });

  return res.json({
    total_Clicks: result.Visit_History.length,
    analytics: result.Visit_History,
  });
};

module.exports = {
  getAllurls,
  postURl,
  getURLAnalytics,
};
