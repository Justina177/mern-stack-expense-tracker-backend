const User = require("../../model/User");

// Register user
const registerUser = async (req, res) => {
    const { email, firstname, lastname, password } = req?.body;
    try {
        // check if user exists
        const userExits = await User.findOne({ email: req.body.email })
        if (userExits) {
            res.json("user Exist");
        }
        const user = await User.create({ email, firstname, lastname, password });
        res.status(200).json(user);
    } catch (error) {
        res.json(error)
    }
};

module.exports = { registerUser };



module.exports = {
    registerUser,
}