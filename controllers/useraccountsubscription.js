const UserAccountSubscription = require("../models").UserAccountSubscription;
const UserAccount = require("../models").UserAccount;
const Subscription = require("../models").Subscription;

const getUserAccountSubscriptions = async (req, res, next) => {
  try {
    let userAccountSubscriptions;
    const queryFilter = {};
    const subscriptionId = req.query.subscription_id;
    const userAccountId = req.query.user_account_id;

    if (subscriptionId) queryFilter.subscription_id = subscriptionId;
    if (userAccountId) queryFilter.user_account_id = userAccountId;

    userAccountSubscriptions = await UserAccountSubscription.findAll({
      include: [UserAccount, Subscription],
      where: queryFilter,
    });
    res.send(userAccountSubscriptions);
  } catch (err) {
    next(err);
  }
};

const createUserAccountSubscription = async (req, res, next) => {
  try {
    const { user_account_id, subscription_id, start_date, end_date } = req.body;

    const newUserAccountSubscription = await UserAccountSubscription.create({
      user_account_id,
      subscription_id,
      start_date,
      end_date,
    });

    res.send(newUserAccountSubscription);
  } catch (err) {
    next(err);
  }
};

const getUserAccountSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAccountSubscription = await UserAccountSubscription.findOne({
      where: { user_account_subscription_id: id },
      include: [UserAccount, Subscription],
    });

    if (userAccountSubscription) {
      res.send(userAccountSubscription);
    } else {
      return res
        .status(404)
        .json({ error: `UserAccountSubscription ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteUserAccountSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAccountSubscription = await UserAccountSubscription.findOne({
      where: { user_account_subscription_id: id },
    });

    if (userAccountSubscription) {
      await UserAccountSubscription.destroy({
        where: { user_account_subscription_id: id },
      });
      return res.status(200).json({
        message: `delete user account subscription id ${id} successful`,
      });
    } else {
      return res
        .status(404)
        .json({ error: `user account subscription ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateUserAccountSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAccountSubscription = await UserAccountSubscription.findOne({
      where: { user_account_subscription_id: id },
    });

    const { user_account_id, subscription_id, start_date, end_date } = req.body;

    if (userAccountSubscription) {
      await UserAccountSubscription.update(
        {
          user_account_id,
          subscription_id,
          start_date,
          end_date,
        },
        {
          where: {
            user_account_subscription_id: id,
          },
        }
      );

      return res.status(200).json({
        message: `update user account subscription id ${id} successful`,
      });
    } else {
      return res
        .status(404)
        .json({ error: `user account subscription ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUserAccountSubscription,
  getUserAccountSubscriptions,
  createUserAccountSubscription,
  deleteUserAccountSubscription,
  updateUserAccountSubscription,
};
