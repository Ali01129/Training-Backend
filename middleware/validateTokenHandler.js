const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const validateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error=new Error("Token is missing");
    error.statusCode=401;
    next(error);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      const error=new Error("Invalid Token");
      error.statusCode=401;
      next(error);
    }
    req.user=decoded.user;
    next();
  });
};

module.exports = validateToken;