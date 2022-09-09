const mongoose = require("mongoose");

// const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "Your first name must be more than 3 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Your last name must be more than 3 characters"]
    },
    emailAddress: String,
    // password: {
    //     type: String,
    //     required: true,
    //     minlength: [8, "Your password is too weak"]
    // },
    location: String,
    cat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat'
    }],
    bio: String
}, { timestamps: true });

// userSchema.methods.verifyPassword = function(password) {
//     console.log("password from User" + password);
//     console.log("password from Database" + this.password);
//     return bcrypt.compareSync(password, this.password);
// }

const User = mongoose.model("User", userSchema);

module.exports = {User};