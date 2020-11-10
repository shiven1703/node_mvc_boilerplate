const User = require("./../models/user");

exports.getHomePage = (req, res) => {
    res.render("home");
};

exports.addNewUser = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;

    const newUser = new User(name, email);
    newUser.save();
    res.send("user added.");
};