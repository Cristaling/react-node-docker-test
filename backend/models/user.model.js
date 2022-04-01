const {NotFoundError} = require("../utils/errors");

exports.login = async (value) => {
    
    // Here we would query from database otherwise
    var user = {
        id: 1,
        username: "admin",
        password: "$2a$10$srRaDa52xL14u4bsti4yROSSuyCNRV2W0dTSTkE9MB.1rJb.unwQO" // Hashed "password" password
    };

    if (value == user.username) {
        return user;
    } else {
        throw new NotFoundError("User does not exist");
    }
};