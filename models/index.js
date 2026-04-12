const mongoose = require("mongoose");

const ShortURL = new mongoose.Schema(
  {
    ShortId: {
      type: String,
      required: true,
      unique: true,
    },
    RedirectURl: {
      type: String,
      required: true,
    },
    Visit_History: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const ShortURLModel = mongoose.model("URL", ShortURL);

module.exports = ShortURLModel;
