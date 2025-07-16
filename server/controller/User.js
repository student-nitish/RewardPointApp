

const User = require("../models/User");
const History = require("../models/History");

exports.createUser = async (req, res) => {
    try {
       const { name  } = req.body;
      console.log("create user ",req.body)
        if (!name) return res.status(400).json({ message: "Name is required" });
            const existingUser = await User.findOne({ name: name.trim() });
            if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
            }

        const newUser = await User.create({ name:name ,points:0});

       
        res.status(201).json({ message: "User created", user: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ points: -1 });
        if (users.length === 0) {
            return res.status(400).json({
                success: false,
                message: "no user is created"
            })
        }
        res.status(200).json({ users });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch users", error: err.message });
    }
}


exports.claimPointsByUser = async (req, res) => {
    try {
        const { userId } = req.body;
        console.log("claim points user id ",userId)
        if (!userId) return res.status(400).json({ message: "User ID is required" });

        const randomPoints = Math.floor(Math.random() * 10) + 1;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $inc: { points: randomPoints } },
            { new: true }
        );

        await History.create({
            user: userId,
            pointsAdded: randomPoints,
        });

        res.status(200).json({
            sucess:true,
            message: `${randomPoints} points added to ${updatedUser.name}`,
            updatedUser,
            claimed: randomPoints,
        });
    } catch (err) {
        res.status(500).json({ message: "Claim failed", error: err.message });
    }
};