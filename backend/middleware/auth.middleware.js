const config = require("../config/config");
const jwt = require("jsonwebtoken");

exports.loggedIn = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) return res.status(401).send("Access Denied");

    try {
        if (token.startsWith('Bearer ')) {
            // Remove Bearer from string
            token = token.slice(7, token.length).trimLeft();
        }
        req.user = jwt.verify(token, config.TOKEN_SECRET);
        next();
    }
    catch (err) {
        res.status(400).send("Invalid Token");
    }
}