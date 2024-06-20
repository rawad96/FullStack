const mongoose = require('mongoose')

const subcriptionSchema = new mongoose.Schema(
    {
        userId: Object,
        movies: [{ movieId: Object, date: String }]
    },
    { versionKey: false }
)

const Subscription = mongoose.model('subscription', subcriptionSchema, 'subscriptions')

module.exports = Subscription