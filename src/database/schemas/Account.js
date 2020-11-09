const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema({
    userId:  {
        tye: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    quantity: {
        type: mongoose.Schema.Types.Decimal128,
        default: 0.00
    },
    gems: {
        type: mongoose.Schema.Types.Number,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Account', AccountSchema);