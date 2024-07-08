const SubscriptionFeature = require("../models").SubscriptionFeature;
const Subscription = require("../models").Subscription;

const getSubscriptionFeatures = async (req, res, next) => {
  try {
    const subscriptionFeatures = await SubscriptionFeature.findAll({
      include: [Subscription],
    });
    res.send(subscriptionFeatures);
  } catch (err) {
    next(err);
  }
};

const createSubscriptionFeature = async (req, res, next) => {
  try {
    const { subscription_id, feature_description } = req.body;

    const newSubscriptionFeature = await SubscriptionFeature.create({
      subscription_id,
      feature_description,
    });

    res.send(newSubscriptionFeature);
  } catch (err) {
    next(err);
  }
};

const getSubscriptionFeature = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscriptionFeature = await SubscriptionFeature.findOne({
      where: { subscription_feature_id: id },
      include: [Subscription],
    });

    if (subscriptionFeature) {
      res.send(subscriptionFeature);
    } else {
      return res
        .status(404)
        .json({ error: `SubscriptionFeature ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteSubscriptionFeature = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscriptionFeature = await SubscriptionFeature.findOne({
      where: { subscription_feature_id: id },
    });

    if (subscriptionFeature) {
      await SubscriptionFeature.destroy({
        where: { subscription_feature_id: id },
      });
      return res
        .status(200)
        .json({ message: `delete subscriptionFeature id ${id} successful` });
    } else {
      return res
        .status(404)
        .json({ error: `SubscriptionFeature ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateSubscriptionFeature = async (req, res, next) => {
  try {
    const id = req.params.id;
    const subscriptionFeature = await SubscriptionFeature.findOne({
      where: { subscription_feature_id: id },
    });

    const { subscription_id, feature_description } = req.body;

    if (subscriptionFeature) {
      await SubscriptionFeature.update(
        {
          subscription_id,
          feature_description,
        },
        {
          where: {
            subscription_feature_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update subscriptionFeature id ${id} successful` });
    } else {
      return res
        .status(404)
        .json({ error: `SubscriptionFeature ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSubscriptionFeature,
  createSubscriptionFeature,
  getSubscriptionFeatures,
  deleteSubscriptionFeature,
  updateSubscriptionFeature,
};
