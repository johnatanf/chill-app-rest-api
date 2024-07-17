const UserAccount = require("../models").UserAccount;

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

module.exports = {
  createUserAccount,
};
