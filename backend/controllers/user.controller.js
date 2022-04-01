const User = require("../models/user.model");
const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {NotFoundError} = require("../utils/errors");

exports.login = async (req, res) => {
    try {
        // Check user exist
        const user = await User.login(req.body.username);
        if (user) {
            const validPass = await bcrypt.compare(req.body.password, user.password);
            if (!validPass) return res.status(401).send("Email or Password is wrong");

            const token = jwt.sign({id: user.id}, config.TOKEN_SECRET);
            res.header("auth-token", token).send({"token": token});
        }
    }
    catch (err) {
        if( err instanceof NotFoundError ) {
            res.status(401).send(`Email or Password is wrong`);
        }
        else {
            console.log(err)
            res.status(500).send("Error retrieving User");
        }
    }   
    
};