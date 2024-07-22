const EmailService = require("../services/EmailService");
const { v4: uuidv4 } = require("uuid");
const UserAccount = require("../models").UserAccount;
require("dotenv").config();

const createUserAccount = async (req, res, next) => {
  try {
    const emailService = new EmailService(process.env.EMAIL_SERVICE);
    let info;
    let newUserAccount;
    let existingUser;
    let user;
    const {
      first_name,
      last_name,
      username,
      email,
      date_of_birth,
      avatar_image_url,
      password,
    } = req.body;

    existingUser = await UserAccount.findOne({ where: { email } });

    if (existingUser) {
      // check if email already exists in database
      existingUser.verification_token = uuidv4();
      await existingUser.save();
    } else {
      // if email does not exist yet in database
      newUserAccount = await UserAccount.create({
        first_name,
        last_name,
        username,
        email,
        date_of_birth,
        avatar_image_url,
        password_hash: password,
        verification_token: uuidv4(),
      });
    }

    user = existingUser || newUserAccount;

    info = await emailService.sendEmail(
      user.email,
      `Verify your Chill email account`,
      `Hi ${user.first_name},\n\n Please verify your registered email account with the code: ${user.verification_token}`
    );

    res.json({
      emailStatus: "Email sent successfully",
      email: info,
      user,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUserAccount,
};
