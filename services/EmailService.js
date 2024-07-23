const nodemailer = require("nodemailer");
require("dotenv").config();

class EmailService {
  constructor(service) {
    switch (service) {
      case "ethereal":
        this.transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          auth: {
            user: process.env.ETHEREAL_FROM_USER,
            pass: process.env.ETHEREAL_PASSWORD,
          },
        });
        break;
      case "gmail":
        this.transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_FROM_USER,
            pass: process.env.GMAIL_PASSWORD,
          },
        });
        break;
      default:
        throw new Error("Unsupported email service");
    }
  }

  async sendEmail(to, subject, text) {
    let mailOptions = {
      from: this.transporter.options.auth.user,
      to: to,
      subject: subject,
      text: text,
    };

    try {
      let info = await this.transporter.sendMail(mailOptions);
      if (this.transporter.options.host === "smtp.ethereal.email") {
        info.url = nodemailer.getTestMessageUrl(info);
      }
      return info;
    } catch (error) {
      console.error("Error sending email: " + error.message);
      throw error;
    }
  }
}

module.exports = EmailService;
