const EmailService = require("../services/EmailService");
const { v4: uuidv4 } = require("uuid");
const UserAccount = require("../models").UserAccount;
require("dotenv").config();

const createUserAccount = async (req, res, next) => {
  try {
    const emailService = new EmailService(process.env.EMAIL_SERVICE);
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
      verification_token: uuidv4(),
    });

    let info = await emailService.sendEmail(
      newUserAccount.email,
      `Verify your Chill email account`,
      `Hi ${newUserAccount.first_name},\n\n Please verify your registered email account with the code: ${newUserAccount.verification_token}`
    );

    res.json({
      emailStatus: "Email sent successfully",
      email: info,
      user: newUserAccount,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUserAccount,
};
