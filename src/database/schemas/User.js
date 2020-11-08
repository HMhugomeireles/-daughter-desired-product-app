const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    provider: {
        id: {
            type: mongoose.Schema.Types.String,
            required: [true, "User provider id value required"]
        },
        provider: {
            type: mongoose.Schema.Types.String,
            required: [true, "User  provider value required"]
        },
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: [true, "User name is value required"]
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: [true, "User email value required"]
    },
    picture: {
        type: mongoose.Schema.Types.String,
        required: [true, "User picture value required"]
    },
    role: {
        type: mongoose.Schema.Types.String,
        required: false,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);