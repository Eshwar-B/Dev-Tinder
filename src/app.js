const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
    res.send("User data sent successfully");
});

app.post("/login", (req, res) => {
    res.send("Login successful");
})

app.get("/admin/getAllData", (req, res) => {
    res.send("All data sent successfully");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted user successfully");
});

app.get(
    "/route",
    (req, res, next) => {
        console.log("1st response");
        // res.send("1st response");
        next();
    });

app.get("/route", (req, res) => {
    console.log("2nd response");
    res.send("2nd response");
});

app.listen(1000, () => {
    console.log("Server started on port 1000");
});
