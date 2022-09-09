const mongoose = require("mongoose");

const catSchema = ({
    name: String,
    age: Number,
    breed: String,
    favourites: String,
    dislikes: String,
    catComment: String,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    image: String,
    rating: String
}, { timestamps: true })

const Cat = mongoose.model("Cat", catSchema);

module.exports = {Cat};