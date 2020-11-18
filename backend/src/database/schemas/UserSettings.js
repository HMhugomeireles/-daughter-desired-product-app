const mongoose = require('mongoose')

const UserSettingsSchema = mongoose.Schema({
    allowance: {
        value: {
            type: mongoose.Schema.Types.Decimal128,        
        },
        type: {
            type: mongoose.Schema.Types.String,
            enum: ['Income', 'Payment']
        },
        numberOfDaysNeedRun: {
            type: mongoose.Schema.Types.Number
        }, 
    }
}, {
  timestamps: true
})

module.exports = mongoose.model('UserSettings', UserSettingsSchema);