const Payment = require("../models").Payment;
const UserAccount = require("../models").UserAccount;
const PaymentMethod = require("../models").PaymentMethod;

const getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.findAll({
      include: [UserAccount, PaymentMethod],
    });
    res.send(payments);
  } catch (err) {
    next(err);
  }
};

const createPayment = async (req, res, next) => {
  try {
    const {
      user_account_id,
      payment_method_id,
      amount,
      payment_date,
      payment_code,
      transaction_id,
      payment_status,
    } = req.body;

    const newPayment = await Payment.create({
      user_account_id,
      payment_method_id,
      amount,
      payment_date,
      payment_code,
      transaction_id,
      payment_status,
    });

    res.send(newPayment);
  } catch (err) {
    next(err);
  }
};

const getPayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findOne({
      where: { payment_id: id },
      include: [UserAccount, PaymentMethod],
    });

    if (payment) {
      res.send(payment);
    } else {
      return res.status(404).json({ error: `Payment ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deletePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findOne({
      where: { payment_id: id },
    });

    if (payment) {
      await Payment.destroy({ where: { payment_id: id } });
      return res
        .status(200)
        .json({ message: `delete payment id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Payment ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updatePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findOne({
      where: { payment_id: id },
    });

    const {
      user_account_id,
      payment_method_id,
      amount,
      payment_date,
      payment_code,
      transaction_id,
      payment_status,
    } = req.body;

    if (payment) {
      await Payment.update(
        {
          user_account_id,
          payment_method_id,
          amount,
          payment_date,
          payment_code,
          transaction_id,
          payment_status,
        },
        {
          where: {
            payment_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update payment id ${id} successful` });
    } else {
      return res.status(404).json({ error: `Payment ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPayment,
  createPayment,
  getPayments,
  deletePayment,
  updatePayment,
};
