const Actor = require("../models").Actor;

const getActors = async (req, res, next) => {
  try {
    const actors = await Actor.findAll();
    res.send(actors);
  } catch (err) {
    next(err);
  }
};

const createActor = async (req, res, next) => {
  try {
    const { actor_name } = req.body;

    const newActor = await Actor.create({
      actor_name,
    });

    res.send(newActor);
  } catch (err) {
    next(err);
  }
};

const getActor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const actor = await Actor.findOne({
      where: { actor_id: id },
    });

    if (actor) {
      res.send(actor);
    } else {
      return res.status(404).json({ error: `Actor ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteActor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const actor = await Actor.findOne({
      where: { actor_id: id },
    });

    if (actor) {
      await Actor.destroy({ where: { actor_id: id } });
      return res
        .status(200)
        .json({ message: `delete actor id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Actor ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateActor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const actor = await Actor.findOne({
      where: { actor_id: id },
    });

    const { actor_name } = req.body;

    if (actor) {
      await Actor.update(
        {
          actor_name,
        },
        {
          where: {
            actor_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update actor id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Actor ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getActor,
  createActor,
  getActors,
  deleteActor,
  updateActor,
};
