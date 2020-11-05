const mongoose = require('mongoose')

const ProductSearchSchema = mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: [true, "Product name required"]
  },
  keySearch: {
    type: mongoose.Schema.Types.String,
    required: [true, "Product search is required"]
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
    credits: {
      type: mongoose.Schema.Types.Number,
      required: [true, "Product behavior points value required"]
    }
  }
}, {
  timestamps: true
})

