const mongoose = require('mongoose')

const connectUsersDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/subscriptions')
        .then(() => console.log("subscriptionsDB connected"))
        .catch((error) => console.log(error))
}

module.exports = connectUsersDB