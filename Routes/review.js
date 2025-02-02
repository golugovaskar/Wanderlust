const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../Utils/wrapAsync.js");
const ExpressError = require("../Utils/ExpressError.js");
//const { reviewSchema} = require("../schema.js");
const  Review = require("../Models/review.js");
const Listing = require("../Models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//POST Review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview)); 

  //Delete Review Route
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

      module.exports = router;