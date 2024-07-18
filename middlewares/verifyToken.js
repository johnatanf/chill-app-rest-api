require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // get token string after 'Bearer'
  const secretKey = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).send();
  }

  jwt.verify(token, secretKey, (err, decoded) => {

    if (err) {
      return res.status(403).json({ error: "Not authorized" });
    }

    req.user = decoded;

    next();
  });
};

module.exports = verifyToken;
