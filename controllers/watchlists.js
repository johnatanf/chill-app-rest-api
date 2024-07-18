const WatchList = require("../models").WatchList;
const Content = require("../models").Content;
const UserAccount = require("../models").UserAccount;

const getWatchLists = async (req, res, next) => {
  try {
    let watchLists;

    watchLists = await WatchList.findAll({
      include: [Content, UserAccount],
      where: {
        user_account_id: req.user.id,
      },
    });
    res.send(watchLists);
  } catch (err) {
    next(err);
  }
};

const createWatchList = async (req, res, next) => {
  try {
    const { content_id } = req.body;

    const newWatchList = await WatchList.create({
      content_id,
      user_account_id: req.user.id,
      date_added: new Date(),
    });

    res.send(newWatchList);
  } catch (err) {
    next(err);
  }
};

const getWatchList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const watchList = await WatchList.findOne({
      where: { watch_list_id: id },
      include: [Content, UserAccount],
    });

    if (!watchList) {
      return res.status(404).json({ error: `WatchList ${id} not found` });
    }

    if (watchList.user_account_id !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Unauthorized - You do not own this watch list" });
    }

    return res.json(watchList);
  } catch (err) {
    next(err);
  }
};

const deleteWatchList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const watchList = await WatchList.findOne({
      where: { watch_list_id: id },
    });

    if (!watchList) {
      return res.status(404).json({ error: `WatchList ${id} not found` });
    }

    if (watchList.user_account_id !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Unauthorized - You do not own this watch list" });
    }

    await WatchList.destroy({ where: { watch_list_id: id } });

    return res
      .status(200)
      .json({ message: `delete watch list id ${id} successful` });
  } catch (err) {
    next(err);
  }
};

const updateWatchList = async (req, res, next) => {
  try {
    const id = req.params.id;
    const watchList = await WatchList.findOne({
      where: { watch_list_id: id },
    });

    const { content_id } = req.body;

    if (!watchList) {
      return res.status(404).json({ error: `WatchList ${id} not found` });
    }

    if (watchList.user_account_id !== req.user.id) {
      return res
        .status(403)
        .json({ error: "Unauthorized - You do not own this watch list" });
    }

    await WatchList.update(
      {
        content_id,
      },
      {
        where: {
          watch_list_id: id,
        },
      }
    );

    return res
      .status(200)
      .json({ message: `update watch list id ${id} successful` });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getWatchList,
  getWatchLists,
  createWatchList,
  deleteWatchList,
  updateWatchList,
};
