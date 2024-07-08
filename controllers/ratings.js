const Rating = require("../models").Rating;
const Content = require("../models").Content;

const getRatings = async (req, res, next) => {
  try {
    const ratings = await Rating.findAll({ include: [Content] });
    res.send(ratings);
  } catch (err) {
    next(err);
  }
};

const createRating = async (req, res, next) => {
  try {
    const { content_id, rating_value } = req.body;

    const newRating = await Rating.create({
      content_id,
      rating_value,
      rating_timestamp: new Date()
    });

    res.send(newRating);
  } catch (err) {
    next(err);
  }
};

const getRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const rating = await Rating.findOne({
      where: { rating_id: id },
      include: [Content],
    });

    if (rating) {
      res.send(rating);
    } else {
      return res.status(404).json({ error: `Rating ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const rating = await Rating.findOne({
      where: { rating_id: id },
    });

    if (rating) {
      await Rating.destroy({ where: { rating_id: id } });
      return res
        .status(200)
        .json({ message: `delete rating id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Rating ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const rating = await Rating.findOne({
      where: { rating_id: id },
    });

    const { content_id, rating_value } = req.body;

    if (rating) {
      await Rating.update(
        {
          content_id,
          rating_value,
        },
        {
          where: {
            rating_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update rating id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Rating ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRating,
  createRating,
  getRatings,
  deleteRating,
  updateRating,
};
