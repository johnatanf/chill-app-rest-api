const ParentalRating = require("../models").ParentalRating;

const getParentalRatings = async (req, res, next) => {
  try {
    const parentalRatings = await ParentalRating.findAll();
    res.send(parentalRatings);
  } catch (err) {
    next(err);
  }
};

const createParentalRating = async (req, res, next) => {
  try {
    const { rating_name } = req.body;

    const newParentalRating = await ParentalRating.create({
      rating_name,
    });

    res.send(newParentalRating);
  } catch (err) {
    next(err);
  }
};

const getParentalRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const parentalRating = await ParentalRating.findOne({
      where: { parental_rating_id: id },
    });

    if (parentalRating) {
      res.send(parentalRating);
    } else {
      return res.status(404).json({ error: `Parental rating ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteParentalRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const parentalRating = await ParentalRating.findOne({
      where: { parental_rating_id: id },
    });

    if (parentalRating) {
      await ParentalRating.destroy({ where: { parental_rating_id: id } });
      return res
        .status(200)
        .json({ message: `delete parental rating id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Parental rating ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateParentalRating = async (req, res, next) => {
  try {
    const id = req.params.id;
    const parentalRating = await ParentalRating.findOne({
      where: { parental_rating_id: id },
    });

    const { rating_name } = req.body;

    if (parentalRating) {
      await ParentalRating.update(
        {
          rating_name,
        },
        {
          where: {
            parental_rating_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update parental rating id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Parental rating ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getParentalRating,
  createParentalRating,
  getParentalRatings,
  deleteParentalRating,
  updateParentalRating,
};
