const WatchHistory = require("../models").WatchHistory;
const Content = require("../models").Content;
const UserAccount = require("../models").UserAccount;

const getWatchHistories = async (req, res, next) => {
  try {
    let watchHistories;
    const queryFilter = {};
    const userAccountId = req.query.user_account_id;
    const contentId = req.query.content_id;

    if (userAccountId) queryFilter.user_account_id = userAccountId;
    if (contentId) queryFilter.content_id = contentId;

    watchHistories = await WatchHistory.findAll({
      include: [Content, UserAccount],
      where: queryFilter,
    });
    res.send(watchHistories);
  } catch (err) {
    next(err);
  }
};

const createWatchHistory = async (req, res, next) => {
  try {
    const { content_id, user_account_id, progress } = req.body;

    const newWatchHistory = await WatchHistory.create({
      content_id,
      user_account_id,
      progress,
    });

    res.send(newWatchHistory);
  } catch (err) {
    next(err);
  }
};

const getWatchHistory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const watchHistory = await WatchHistory.findOne({
      where: { watch_history_id: id },
      include: [Content, UserAccount],
    });

    if (watchHistory) {
      res.send(watchHistory);
    } else {
      return res.status(404).json({ error: `WatchHistory ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteWatchHistory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const watchHistory = await WatchHistory.findOne({
      where: { watch_history_id: id },
    });

    if (watchHistory) {
      await WatchHistory.destroy({ where: { watch_history_id: id } });
      return res
        .status(200)
        .json({ message: `delete watch history id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Watch history ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateWatchHistory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const watchHistory = await WatchHistory.findOne({
      where: { watch_history_id: id },
    });

    const { content_id, user_account_id, progress } = req.body;

    if (watchHistory) {
      await WatchHistory.update(
        {
          content_id,
          user_account_id,
          progress,
        },
        {
          where: {
            watch_history_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update watch history id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Watch history ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getWatchHistory,
  getWatchHistories,
  createWatchHistory,
  deleteWatchHistory,
  updateWatchHistory,
};
