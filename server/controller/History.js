const History = require("../models/History");

exports.getHistory = async (req, res) => {
  try {
    const history = await History.find()
      .populate('user', 'name')
      .populate("pointsAdded")
      .sort({ createdAt: -1 });

    res.status(200).json({ history });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch history", error: err.message });
  }
};
