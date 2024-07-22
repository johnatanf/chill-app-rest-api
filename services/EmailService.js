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
      console.log("Email sent: " + info.response);
      console.log("Preview URL: " + nodemailer.getTestMessageUrl(info));
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
