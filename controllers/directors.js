const Director = require("../models").Director;

const getDirectors = async (req, res, next) => {
  try {
    const directors = await Director.findAll();
    res.send(directors);
  } catch (err) {
    next(err);
  }
};

const createDirector = async (req, res, next) => {
  try {
    const { director_name } = req.body;

    const newDirector = await Director.create({
      director_name,
    });

    res.send(newDirector);
  } catch (err) {
    next(err);
  }
};

const getDirector = async (req, res, next) => {
  try {
    const id = req.params.id;
    const director = await Director.findOne({
      where: { director_id: id },
    });

    if (director) {
      res.send(director);
    } else {
      return res.status(404).json({ error: `Director ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteDirector = async (req, res, next) => {
  try {
    const id = req.params.id;
    const director = await Director.findOne({
      where: { director_id: id },
    });

    if (director) {
      await Director.destroy({ where: { director_id: id } });
      return res
        .status(200)
        .json({ message: `delete director id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Director ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateDirector = async (req, res, next) => {
  try {
    const id = req.params.id;
    const director = await Director.findOne({
      where: { director_id: id },
    });

    const { director_name } = req.body;

    if (director) {
      await Director.update(
        {
          director_name,
        },
        {
          where: {
            director_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update director id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Director ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getDirector,
  createDirector,
  getDirectors,
  deleteDirector,
  updateDirector,
};
