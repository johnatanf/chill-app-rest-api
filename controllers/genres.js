const Genre = require("../models").Genre;

const getGenres = async (req, res, next) => {
  try {
    const genres = await Genre.findAll();
    res.send(genres);
  } catch (err) {
    next(err);
  }
};

const createGenre = async (req, res, next) => {
  try {
    const { genre_name } = req.body;

    const newGenre = await Genre.create({
      genre_name,
    });

    res.send(newGenre);
  } catch (err) {
    next(err);
  }
};

const getGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    const genre = await Genre.findOne({
      where: { genre_id: id },
    });

    if (genre) {
      res.send(genre);
    } else {
      return res.status(404).json({ error: `Genre ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    const genre = await Genre.findOne({
      where: { genre_id: id },
    });

    if (genre) {
      await Genre.destroy({ where: { genre_id: id } });
      return res
        .status(200)
        .json({ message: `delete genre id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Genre ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    const genre = await Genre.findOne({
      where: { genre_id: id },
    });

    const { genre_name } = req.body;

    if (genre) {
      await Genre.update(
        {
          genre_name,
        },
        {
          where: {
            genre_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update genre id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Genre ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getGenre,
  createGenre,
  getGenres,
  deleteGenre,
  updateGenre,
};
