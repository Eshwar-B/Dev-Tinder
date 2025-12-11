const express = require("express");

const app = express();

app.use("/demo", (req, res) => {
    res.send("Dev Tinder");
});

app.use("/", (req, res) => {
    res.send("Home page, Login or register, signup");
})


app.listen(1000, () => {
    console.log("Server started on port 1000");
});
