const mongoose = require('mongoose')


const connectUsersDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/UsersDB')
        .then(() => console.log("usersDb connected"))
        .catch((error) => console.log(error))
}
module.exports = connectUsersDB 