const ContentDirector = require("../models").ContentDirector;
const Content = require("../models").Content;
const Director = require("../models").Director;

const getContentDirectors = async (req, res, next) => {
  try {
    let contentDirectors;
    const queryFilter = {};
    const directorId = req.query.director_id;
    const contentId = req.query.content_id;

    if (directorId) queryFilter.director_id = directorId;
    if (contentId) queryFilter.content_id = contentId;

    contentDirectors = await ContentDirector.findAll({
      include: [Content, Director],
      where: queryFilter,
    });
    res.send(contentDirectors);
  } catch (err) {
    next(err);
  }
};

const createContentDirector = async (req, res, next) => {
  try {
    const { content_id, director_id, date_added } = req.body;

    const newContentDirector = await ContentDirector.create({
      content_id,
      director_id,
      date_added,
    });

    res.send(newContentDirector);
  } catch (err) {
    next(err);
  }
};

const getContentDirector = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentDirector = await ContentDirector.findOne({
      where: { content_director_id: id },
      include: [Content, Director],
    });

    if (contentDirector) {
      res.send(contentDirector);
    } else {
      return res.status(404).json({ error: `ContentDirector ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteContentDirector = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentDirector = await ContentDirector.findOne({
      where: { content_director_id: id },
    });

    if (contentDirector) {
      await ContentDirector.destroy({ where: { content_director_id: id } });
      return res
        .status(200)
        .json({ message: `delete content director id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content director ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateContentDirector = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentDirector = await ContentDirector.findOne({
      where: { content_director_id: id },
    });

    const { content_id, director_id, date_added } = req.body;

    if (contentDirector) {
      await ContentDirector.update(
        {
          content_id,
          director_id,
          date_added,
        },
        {
          where: {
            content_director_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update content director id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content director ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getContentDirector,
  getContentDirectors,
  createContentDirector,
  deleteContentDirector,
  updateContentDirector,
};
