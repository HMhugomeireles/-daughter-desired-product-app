const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    userId:  {
        tye: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    accountId:  {
        tye: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    value: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    gems: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    approvalBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    status: {
        type: mongoose.Schema.Types.String,
        required: true,
        enum: ['refused', 'review', 'approved'],
        default: 'review'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', TransactionSchema);