const Season = require("../models").Season;
const Content = require("../models").Content;

const getSeasons = async (req, res, next) => {
  try {
    const seasons = await Season.findAll({include: [Content]});
    res.send(seasons);
  } catch (err) {
    next(err);
  }
};

const createSeason = async (req, res, next) => {
  try {
    const { content_id, season_number, release_date, season_description } =
      req.body;

    const newSeason = await Season.create({
      content_id,
      season_number,
      release_date,
      season_description,
    });

    res.send(newSeason);
  } catch (err) {
    next(err);
  }
};

const getSeason = async (req, res, next) => {
  try {
    const id = req.params.id;
    const season = await Season.findOne({
      where: { season_id: id },
      include: [Content]
    });

    if (season) {
      res.send(season);
    } else {
      return res.status(404).json({ error: `Season ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteSeason = async (req, res, next) => {
  try {
    const id = req.params.id;
    const season = await Season.findOne({
      where: { season_id: id },
    });

    if (season) {
      await Season.destroy({ where: { season_id: id } });
      return res
        .status(200)
        .json({ message: `delete season id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Season ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateSeason = async (req, res, next) => {
  try {
    const id = req.params.id;
    const season = await Season.findOne({
      where: { season_id: id },
    });

    const { content_id, season_number, release_date, season_description } =
      req.body;

    if (season) {
      await Season.update(
        {
          content_id,
          season_number,
          release_date,
          season_description,
        },
        {
          where: {
            season_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update season id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Season ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSeason,
  createSeason,
  getSeasons,
  deleteSeason,
  updateSeason,
};
