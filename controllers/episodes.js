const Episode = require("../models").Episode;
const Season = require("../models").Season;

const getEpisodes = async (req, res, next) => {
  try {
    const episodes = await Episode.findAll({ include: [Season] });
    res.send(episodes);
  } catch (err) {
    next(err);
  }
};

const createEpisode = async (req, res, next) => {
  try {
    const {
      season_id,
      episode_number,
      title,
      episode_description,
      release_date,
      duration_minutes,
    } = req.body;

    const newEpisode = await Episode.create({
      season_id,
      episode_number,
      title,
      episode_description,
      release_date,
      duration_minutes,
    });

    res.send(newEpisode);
  } catch (err) {
    next(err);
  }
};

const getEpisode = async (req, res, next) => {
  try {
    const id = req.params.id;
    const episode = await Episode.findOne({
      where: { episode_id: id },
      include: [Season],
    });

    if (episode) {
      res.send(episode);
    } else {
      return res.status(404).json({ error: `Episode ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteEpisode = async (req, res, next) => {
  try {
    const id = req.params.id;
    const episode = await Episode.findOne({
      where: { episode_id: id },
    });

    if (episode) {
      await Episode.destroy({ where: { episode_id: id } });
      return res
        .status(200)
        .json({ message: `delete episode id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Episode ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateEpisode = async (req, res, next) => {
  try {
    const id = req.params.id;
    const episode = await Episode.findOne({
      where: { episode_id: id },
    });

    const {
      season_id,
      episode_number,
      title,
      episode_description,
      release_date,
      duration_minutes,
    } = req.body;

    if (episode) {
      await Episode.update(
        {
          season_id,
          episode_number,
          title,
          episode_description,
          release_date,
          duration_minutes,
        },
        {
          where: {
            episode_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update episode id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Episode ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getEpisode,
  createEpisode,
  getEpisodes,
  deleteEpisode,
  updateEpisode,
};
