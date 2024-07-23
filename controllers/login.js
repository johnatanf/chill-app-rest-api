require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserAccount = require("../models").UserAccount;

const loginUserAccount = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userAccount = await UserAccount.findOne({ where: { email } });
    const secretKey = process.env.JWT_SECRET;
    let checkPassword;
    let payload;
    let token;

    if (!userAccount) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    checkPassword = await userAccount.validPassword(password);

    if (checkPassword === false) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    payload = {
      id: userAccount.user_account_id,
      email: userAccount.email,
    };

    console.log(payload);
    token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3600000,
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  loginUserAccount,
};
