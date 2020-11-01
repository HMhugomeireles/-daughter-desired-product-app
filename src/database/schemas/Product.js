const mongoose = require('mongoose')

const ProductSearchSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: [true, "Product name required"]
  },
  img: {
    type: mongoose.Schema.Types.String,
    required: [true, "Product image required"]
  },
  price: {
    priceToShow: {
      type: mongoose.Schema.Types.String,
      required: [true, "Product price required"]
    },
    euros: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, "Product price in euros required"]
    },
    behaviorPoints: {
      type: mongoose.Schema.Types.Number,
      required: [true, "Product behavior points value required"]
    },
    schoolTest: {
      quantity: {
        type: mongoose.Schema.Types.Number,
        required: [true, "Product school test quantity required"]
      },
      score: {
        type: mongoose.Schema.Types.Number,
        required: [true, "Product school test value required"]
      }
    }
  }
}, {
  timestamps: true
})

