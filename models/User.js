const mongoose = require("mongoose");

const userSchema = ({
    name: String,
    emailAddress: Number,
    location: String,
    cat: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat'
    }],
    bio: String,
}, { timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = {User};