const { default: mongoose, Schema } = require("mongoose");


mongoose.connect('mongodb://localhost:27017/Todoapp');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }

});


module.exports = mongoose.Model("Users", userSchema);