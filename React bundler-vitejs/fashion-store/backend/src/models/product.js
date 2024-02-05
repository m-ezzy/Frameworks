import { Types, Schema, model } from 'mongoose'

const productSchema = Schema({
  // user: {
    // type: Types.ObjectId,
    // required: true,
    // ref: 'User',
  // },
  name: { //title
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: false,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  // reviews: [reviewSchema]
},
{
  timestamps: true,
}


/*
  {
  //id
	id: {
		type: Schema.Types.ObjectId,
    // required: true,
    // ref: 'User',
  },
  user: {
    type: Number,
  },
  image: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  brand: { //company
    type: String,
    // required: true,
  },
  category: {
    type: String,
    required: true,
  },
  //sub-category
  //colors
  //sizes
  price: {
    type: Number,
    // required: true,
    default: 0,
  },
	countInStock: { //stock
    type: Number,
    // required: true,
    default: 0,
  },
  rating: { //stars
    type: Number,
    // required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    // required: true,
    default: 0,
  },
  // reviews: []
  // reviews: [reviewSchema]
  },
	{
		// timestamps: true,
  }
  */
)

const Product = model('Product', productSchema)

export default Product
