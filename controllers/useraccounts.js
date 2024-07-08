const UserAccount = require("../models").UserAccount;

const getUserAccounts = async (req, res, next) => {
  try {
    const userAccounts = await UserAccount.findAll();
    res.send(userAccounts);
  } catch (err) {
    next(err);
  }
};

const createUserAccount = async (req, res, next) => {
  try {
    const { username, email, date_of_birth, avatar_image_url, password_hash } =
      req.body;

    const newUserAccount = await UserAccount.create({
      username,
      email,
      date_of_birth,
      avatar_image_url,
      password_hash,
    });

    res.send(newUserAccount);
  } catch (err) {
    next(err);
  }
};

const getUserAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAccount = await UserAccount.findOne({
      where: { user_account_id: id },
    });

    if (userAccount) {
      res.send(userAccount);
    } else {
      return res.status(404).json({ error: `UserAccount ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const deleteUserAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAccount = await UserAccount.findOne({
      where: { user_account_id: id },
    });

    if (userAccount) {
      await UserAccount.destroy({ where: { user_account_id: id } });
      return res
        .status(200)
        .json({ message: `delete user account id ${id} successful` });
    } else {
      return res.status(404).json({ error: `User account ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

const updateUserAccount = async (req, res, next) => {
  try {
    const id = req.params.id;
    const userAccount = await UserAccount.findOne({
      where: { user_account_id: id },
    });

    const { username, email, date_of_birth, avatar_image_url, password_hash } =
      req.body;

    if (userAccount) {
      await UserAccount.update(
        {
          username,
          email,
          date_of_birth,
          avatar_image_url,
        },
        {
          where: {
            user_account_id: id,
          },
        }
      );

      return res
        .status(200)
        .json({ message: `update user account id ${id} successful` });
    } else {
      return res.status(404).json({ error: `User account ${id} not found` });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUserAccount,
  createUserAccount,
  getUserAccounts,
  deleteUserAccount,
  updateUserAccount,
};
