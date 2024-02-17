const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");

// Register user
const registerUser = expressAsyncHandler(async (req, res) => {
    const { email, firstname, lastname, password } = req?.body;

    // check if user exists
    const userExits = await User.findOne({ email })
    
    if (userExits) throw new Error("User already exists");
    try {
        const user = await User.create({ email, firstname, lastname, password });
        res.status(200).json(user);

    } catch (error) {
        res.json(error)
    }    
});

module.exports = { registerUser };
