const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: String,
  rating: {
    type: Number,
    default: 1,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Indexes
reviewSchema.index({ rating: 1 }); // Index on rating
reviewSchema.index({ createdAt: -1 }); // Index on createdAt for sorting by latest reviews
reviewSchema.index({ author: 1 }); // Index on author

// Compound index example
reviewSchema.index({ author: 1, createdAt: -1 }); // Compound index on author and createdAt

module.exports = mongoose.model("Review", reviewSchema);
