const WatchList = require("../models").WatchList;
const Content = require("../models").Content;
const UserAccount = require("../models").UserAccount;

const getWatchLists = async (req, res, next) => {
  try {
    let watchLists;
    const queryFilter = {};
    const userAccountId = req.query.user_account_id;
    const contentId = req.query.content_id;

    if (userAccountId) queryFilter.user_account_id = userAccountId;
    if (contentId) queryFilter.content_id = contentId;

    watchLists = await WatchList.findAll({
      include: [Content, UserAccount],
      where: queryFilter,
    });
    res.send(watchLists);
  } catch (err) {
    next(err);
  }
};

const createWatchList = async (req, res, next) => {
  try {
    const { content_id, user_account_id, date_added } = req.body;

    const newWatchList = await WatchList.create({
      content_id,
      user_account_id,
      date_added,
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

    if (watchList) {
      res.send(watchList);
    } else {
      return res.status(404).json({ error: `WatchList ${id} not found` });
    }
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

    if (watchList) {
      await WatchList.destroy({ where: { watch_list_id: id } });
      return res
        .status(200)
        .json({ message: `delete watch list id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Watch list ${id} not found` });
    }
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

    const { content_id, user_account_id, date_added } = req.body;

    if (watchList) {
      await WatchList.update(
        {
          content_id,
          user_account_id,
          date_added,
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
    } else {
      return res.status(404).json({ error: `Watch list ${id} not found` });
    }
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
