const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
  ],
  shippingAddress: {
    province: { type: String, required: [true, 'province is required.'] },
    regency: { type: String, required: [true, 'regency is required.'] },
    district: { type: String, required: [true, 'district is required.'] },
    village: { type: String, required: [true, 'village is required.'] },
    postalCode: { type: String, required: [true, 'postalCode is required.'] },
    detail: { type: String },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },

  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },

  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  deliveredAt: {
    type: Date,
  },
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
