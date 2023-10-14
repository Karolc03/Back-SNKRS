const { User } = require("../../schemas/index");

const changeStatusByUserId = async (req, res) => {
    try {
        const { User_id } = req.locals;
        const { status } = req.body;
        if (!status) return res.status(400).json({ message: "Status is required" });
        if (status === "banned") return res.status(400).json({ message: "Unauthorized state" });
        const user = await User.findOneAndUpdate({ _id: User_id }, { status }, { new: true });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = changeStatusByUserId;