const { Op } = require("sequelize");
const Content = require("../models").Content;
const ParentalRating = require("../models").ParentalRating;

const getContents = async (req, res, next) => {
  try {
    const { search } = req.query;
    let whereQuery = {};
    let contents;

    if (search) {
      whereQuery = {
        ...whereQuery,
        [Op.or]: {
          content_description: {
            [Op.like]: `%${search}%`,
          },
          title: {
            [Op.like]: `%${search}%`,
          },
        },
      };
    }

    contents = await Content.findAll({ include: ParentalRating, where: whereQuery });
    res.send(contents);
  } catch (err) {
    next(err);
  }
};

const createContent = async (req, res, next) => {
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

const getContent = async (req, res, next) => {
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

const deleteContent = async (req, res, next) => {
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

const updateContent = async (req, res, next) => {
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
  getContents,
  createContent,
  getContent,
  deleteContent,
  updateContent,
};
