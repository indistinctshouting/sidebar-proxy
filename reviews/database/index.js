const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://bro1:password1@ds149252.mlab.com:49252/yelp-restaurant-info');
// connection.on('error', console.error.bind(console, 'connection error'));
// connection.once('open', () => {
//   console.log('CONNECTED');
// });

const reviewSchema = new mongoose.Schema({
  reviewId: Number, 
  restaurantId: Number,
  rating: Number,
  date: Date,
  text: String,
  owner: {
    picture: String,
    name: String,
    location: String,
    friends: Number,
    reviewCount: Number,
    photos: Number,
    checkIns: Number,
    elite: Boolean
  },
  updated: Boolean,
  upvotes: {
    useful: Number,
    funny: Number,
    cool: Number
  }
});

const Review = connection.model('Review', reviewSchema);

const getRestaurantReviews = (id, callback) => {
  console.log(id);
  Review.find({restaurantId: id}, (err, reviews) => {
    callback(reviews);
  });
};

module.exports.getRestaurantReviews = getRestaurantReviews;