const express = require("express");

const app = express();
const connectDB = require("./config/database");
const userModel = require("./models/user");

app.post("/signup", async (req, res) => {

    const userObj = {
        name: "bhaskar",
        email: "bhaskar@gmail.com",
        password: "123456",
        age: 21,
        gender: "male"
    };

    try {
        const user = new userModel(userObj);
        await user.save();
        res.send("User saved successfully ");
    } catch (err) {
        res.status(400).send("Error saving the user", err.message);
    }


});

connectDB().then(() => {

    app.listen(1000, () => {
        console.log("Server started on port 1000");
    });

    console.log("Connected to MongoDB cluster");

}).catch((err) => {

    console.error("Failed to connect to MongoDB", err);

});

