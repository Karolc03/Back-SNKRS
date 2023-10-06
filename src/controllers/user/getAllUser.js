const { User } = require("../../schemas/index");

const getTrolleyByUserId = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getTrolleyByUserId;