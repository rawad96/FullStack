const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        city: String
    },
    { versionKey: false }
)

const User = mongoose.model('user', userSchema, 'users')

module.exports = User