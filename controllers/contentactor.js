const ContentActor = require("../models").ContentActor;
const Content = require("../models").Content;
const Actor = require("../models").Actor;

const getContentActors = async (req, res, next) => {
  try {
    let contentActors;
    const queryFilter = {};
    const actorId = req.query.actor_id;
    const contentId = req.query.content_id;

    if (actorId) queryFilter.actor_id = actorId;
    if (contentId) queryFilter.content_id = contentId;

    contentActors = await ContentActor.findAll({
      include: [Content, Actor],
      where: queryFilter,
    });
    res.send(contentActors);
  } catch (err) {
    next(err);
  }
};

const createContentActor = async (req, res, next) => {
  try {
    const { content_id, actor_id } = req.body;

    const newContentActor = await ContentActor.create({
      content_id,
      actor_id,
    });

    res.send(newContentActor);
  } catch (err) {
    next(err);
  }
};

const getContentActor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentActor = await ContentActor.findOne({
      where: { content_actor_id: id },
      include: [Content, Actor],
    });

    if (contentActor) {
      res.send(contentActor);
    } else {
      return res.status(404).json({ error: `ContentActor ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteContentActor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentActor = await ContentActor.findOne({
      where: { content_actor_id: id },
    });

    if (contentActor) {
      await ContentActor.destroy({ where: { content_actor_id: id } });
      return res
        .status(200)
        .json({ message: `delete content actor id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content actor ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateContentActor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contentActor = await ContentActor.findOne({
      where: { content_actor_id: id },
    });

    const { content_id, actor_id } = req.body;

    if (contentActor) {
      await ContentActor.update(
        {
          content_id,
          actor_id,
        },
        {
          where: {
            content_actor_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update content actor id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Content actor ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getContentActor,
  getContentActors,
  createContentActor,
  deleteContentActor,
  updateContentActor,
};
