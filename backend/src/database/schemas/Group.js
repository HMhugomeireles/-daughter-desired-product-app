const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
    groupOwner: {
        tye: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    listUsers: {
        tye: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Group', GroupSchema);