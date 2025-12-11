const express = require("express");

const app = express();


app.get("/user", (req, res) => {
    res.send({ name: "Eshwar", age: 22 });
});

app.post("/user", (req, res) => {
    res.send("User data saved successfully")
})

app.delete("/user", (req, res) => {
    res.send("User data deleted successfully")
})

app.use("/home", (req, res) => {
    res.send("Home page");
});

app.listen(1000, () => {
    console.log("Server started on port 1000");
});
