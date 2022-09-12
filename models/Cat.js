const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    likes: String,
    dislikes: String,
    catComment: String,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: String,
    rating: Number,
}, { timestamps: true })

const Cat = mongoose.model("Cat", catSchema);

module.exports = {Cat};

