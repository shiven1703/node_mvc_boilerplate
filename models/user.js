class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    save() {
        console.log(this);
        console.log("user saved");
    }
}

module.exports = User;