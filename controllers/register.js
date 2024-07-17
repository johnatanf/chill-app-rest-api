const UserAccount = require("../models").UserAccount;

const createUserAccount = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      date_of_birth,
      avatar_image_url,
      password,
    } = req.body;

    const newUserAccount = await UserAccount.create({
      first_name,
      last_name,
      username,
      email,
      date_of_birth,
      avatar_image_url,
      password_hash: password,
      verification_token: "testtokentemporary2"
    });

    res.send(newUserAccount);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUserAccount,
};
