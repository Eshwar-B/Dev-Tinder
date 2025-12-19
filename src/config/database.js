const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://eshwar:eshwar@node-cluster.zyp7isj.mongodb.net/devTinder"
    );
};

module.exports = connectDB;
