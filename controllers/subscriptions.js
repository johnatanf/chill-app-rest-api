const Subscription = require("../models").Subscription;

const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.findAll();
    res.send(subscriptions);
  } catch (err) {
    next(err);
  }
};

const createSubscription = async (req, res, next) => {
  try {
    const { plan_name, price_month, number_of_accounts } = req.body;

    const newSubscription = await Subscription.create({
      plan_name,
      price_month,
      number_of_accounts,
    });

    res.send(newSubscription);
  } catch (err) {
    next(err);
  }
};

const getSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscription = await Subscription.findOne({
      where: { subscription_id: id },
    });

    if (subscription) {
      res.send(subscription);
    } else {
      return res.status(404).json({ error: `Subscription ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscription = await Subscription.findOne({
      where: { subscription_id: id },
    });

    if (subscription) {
      await Subscription.destroy({ where: { subscription_id: id } });
      return res
        .status(200)
        .json({ message: `delete subscription id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Subscription ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateSubscription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscription = await Subscription.findOne({
      where: { subscription_id: id },
    });

    const { plan_name, price_month, number_of_accounts } = req.body;

    if (subscription) {
      await Subscription.update(
        {
          plan_name,
          price_month,
          number_of_accounts,
        },
        {
          where: {
            subscription_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update subscription id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Subscription ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSubscription,
  createSubscription,
  getSubscriptions,
  deleteSubscription,
  updateSubscription,
};
