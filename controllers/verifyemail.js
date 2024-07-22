require("dotenv").config();
const UserAccount = require("../models").UserAccount;

const verifyEmail = async (req, res, next) => {
  try {
    const { verification_token } = req.query;
    const user = await UserAccount.findOne({
      where: { verification_token },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid Verification Token" });
    }

    if (user.verified === true) {
      return res.status(200).json({ message: "Email Already Verified" });
    }

    user.verified = true;
    await user.save();

    return res.status(200).json({ message: "Email Verified Successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  verifyEmail,
};
