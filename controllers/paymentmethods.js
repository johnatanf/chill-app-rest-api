const PaymentMethod = require("../models").PaymentMethod;

const getPaymentMethods = async (req, res, next) => {
  try {
    const paymentMethods = await PaymentMethod.findAll({});
    res.send(paymentMethods);
  } catch (err) {
    next(err);
  }
};

const createPaymentMethod = async (req, res, next) => {
  try {
    const { payment_method_name, payment_method_description } = req.body;

    const newPaymentMethod = await PaymentMethod.create({
      payment_method_name,
      payment_method_description,
    });

    res.send(newPaymentMethod);
  } catch (err) {
    next(err);
  }
};

const getPaymentMethod = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paymentMethod = await PaymentMethod.findOne({
      where: { payment_method_id: id },
    });

    if (paymentMethod) {
      res.send(paymentMethod);
    } else {
      return res.status(404).json({ error: `PaymentMethod ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deletePaymentMethod = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paymentMethod = await PaymentMethod.findOne({
      where: { payment_method_id: id },
    });

    if (paymentMethod) {
      await PaymentMethod.destroy({ where: { payment_method_id: id } });
      return res
        .status(200)
        .json({ message: `delete paymentMethod id ${id} successful` });
    } else {
      return res.status(404).json({ error: `PaymentMethod ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updatePaymentMethod = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paymentMethod = await PaymentMethod.findOne({
      where: { payment_method_id: id },
    });

    const { payment_method_name, payment_method_description } = req.body;

    if (paymentMethod) {
      await PaymentMethod.update(
        {
          payment_method_name,
          payment_method_description,
        },
        {
          where: {
            payment_method_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update paymentMethod id ${id} successful` });
    } else {
      return res.status(404).json({ error: `PaymentMethod ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPaymentMethod,
  createPaymentMethod,
  getPaymentMethods,
  deletePaymentMethod,
  updatePaymentMethod,
};
