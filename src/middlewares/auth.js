const adminAuth = (req, res, next) => {
    console.log("Admin Auth");
    const token = "abc";
    const isAdmin = token === "abc";
    if (!isAdmin) {
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    console.log("User Auth");
    const token = "abc";
    const isUser = token === "abc";
    if (!isUser) {
        res.status(401).send("Unauthorized");
    } else {
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth,
};