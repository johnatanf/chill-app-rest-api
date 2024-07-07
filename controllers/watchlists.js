const WatchList = require("../models").WatchList;
const Content = require("../models").Content;
const UserAccount = require("../models").UserAccount;

const getWatchLists = async (req, res, next) => {
  try {
    const watchLists = await WatchList.findAll({
      include: [Content, UserAccount]
    });
    res.send(watchLists);
  } catch (err) {
    next(err);
  }
};

const createWatchList = async (req, res, next) => {
  try {
    const {
      title,
      parental_rating_id,
      content_description,
      description_image_url,
      thumbnail_image_url,
      content_type,
      chill_original,
      premium,
      duration_minutes,
      release_date,
    } = req.body;

    const newContent = await Content.create({
      title,
      parental_rating_id,
      content_description,
      description_image_url,
      thumbnail_image_url,
      content_type,
      chill_original,
      premium,
      duration_minutes,
      release_date,
    });

    res.send(newContent);
  } catch (err) {
    next(err);
  }
};

const getWatchList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const content = await Content.findOne({
      where: { content_id: id },
      include: ParentalRating,
    });

    if (content) {
      res.send(content);
    } else {
      return res.status(404).json({ error: `Content ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteWatchList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const content = await Content.findOne({
      where: { content_id: id },
    });

    if (content) {
      await Content.destroy({ where: { content_id: id } });
      return res
        .status(200)
        .json({ message: `delete content id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateWatchList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const content = await Content.findOne({
      where: { content_id: id },
    });

    const {
      title,
      parental_rating_id,
      content_description,
      description_image_url,
      thumbnail_image_url,
      content_type,
      chill_original,
      premium,
      duration_minutes,
      release_date,
    } = req.body;

    if (content) {
      await Content.update(
        {
          title,
          parental_rating_id,
          content_description,
          description_image_url,
          thumbnail_image_url,
          content_type,
          chill_original,
          premium,
          duration_minutes,
          release_date,
        },
        {
          where: {
            content_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update content id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getWatchLists,
  createWatchList,
  getWatchList,
  deleteWatchList,
  updateWatchList,
};
