
const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String
    },
    { versionKey: false }
)

const User = mongoose.model("user", UserSchema, "Users")

module.exports = User