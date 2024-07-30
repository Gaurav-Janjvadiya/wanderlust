const joi = require("joi");

module.exports.listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      description: joi.string().required(),
      location: joi.string().required(),
      price: joi.number().min(0).required(),
      country: joi.string().required(),
    })
    .required(),
});

// image: joi.object({
// filename: joi.string().default("listingImage"),
// url: joi
//   .string()
//   .uri()
//   .allow("")
//   .default(
//     "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//   ),})
module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().default(1).min(1).max(5),
      comment: joi.string().required(),
    })
    .required(),
});
