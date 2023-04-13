const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) {
    res.status(400).json("No token found");
  }

  jwt.verify(token, "asdassaddsadqwfqwr", (err, user) => {
    if (err) throw err;

    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      console.log("wrong user");
      throw new Error(" Wrong User  ");
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      console.log("wrong Admin ");
      throw new Error(" Wrong User  ");
    }
  });
};
module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin,
};
