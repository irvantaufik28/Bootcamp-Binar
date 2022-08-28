const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const secret = "srerefoui|gp@q*wrpj[oief";

exports.register =  (req, res) => {
  const username = req.body.username;
const password = req.body.password;

  let hashpassword = bcrypt.hashSync(password, 10);

  User.create({
    username: username,
    password: hashpassword,
  }).then((data) => {
    return res.json({
      id: data.id,
      username: data.username,
    });
  });
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    where: { username: username },
  }).then((user) => {
    if (!user) {
      return res.json({ message: "user not found" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: "Wrong password" });
    }
    const accessToken = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      secret
    );
    return res.json({
      id: user.id,
      username: user.username,
      accessToken: accessToken,
    });
  });
};

exports.whoami = (req, res)=>{
    const currentUser = req.user
    return res.json({
        id:currentUser.id,
        username: currentUser.username
    })
}