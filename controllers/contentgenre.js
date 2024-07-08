const ContentGenre = require("../models").ContentGenre;
const Content = require("../models").Content;
const Genre = require("../models").Genre;

const getContentGenres = async (req, res, next) => {
  try {
    let contentGenres;
    const queryFilter = {};
    const genreId = req.query.genre_id;
    const contentId = req.query.content_id;

    if (genreId) queryFilter.genre_id = genreId;
    if (contentId) queryFilter.content_id = contentId;

    contentGenres = await ContentGenre.findAll({
      include: [Content, Genre],
      where: queryFilter,
    });
    res.send(contentGenres);
  } catch (err) {
    next(err);
  }
};

const createContentGenre = async (req, res, next) => {
  try {
    const { content_id, genre_id } = req.body;

    const newContentGenre = await ContentGenre.create({
      content_id,
      genre_id,
    });

    res.send(newContentGenre);
  } catch (err) {
    next(err);
  }
};

const getContentGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentGenre = await ContentGenre.findOne({
      where: { content_genre_id: id },
      include: [Content, Genre],
    });

    if (contentGenre) {
      res.send(contentGenre);
    } else {
      return res.status(404).json({ error: `ContentGenre ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteContentGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentGenre = await ContentGenre.findOne({
      where: { content_genre_id: id },
    });

    if (contentGenre) {
      await ContentGenre.destroy({ where: { content_genre_id: id } });
      return res
        .status(200)
        .json({ message: `delete content genre id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content genre ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateContentGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentGenre = await ContentGenre.findOne({
      where: { content_genre_id: id },
    });

    const { content_id, genre_id } = req.body;

    if (contentGenre) {
      await ContentGenre.update(
        {
          content_id,
          genre_id,
        },
        {
          where: {
            content_genre_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update content genre id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content genre ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getContentGenre,
  getContentGenres,
  createContentGenre,
  deleteContentGenre,
  updateContentGenre,
};
