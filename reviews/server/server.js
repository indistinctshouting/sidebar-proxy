const express = require('express');
const BodyParser = require('body-parser');
const app = express();
const db = require('./../database/');
const cors = require('cors');
const port = process.env.PORT || 3002;

app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
app.use(cors());
app.use('/restaurant/:id', express.static(__dirname + './../public'));

app.get('/restaurant/:id/reviews', (req, res) => {
  console.log(__dirname);
  db.getRestaurantReviews(req.params.id, (reviews) => {
    res.send(reviews);
  });
});


app.listen(port, () => {
  console.log(`Port ${port} we read you loud and clear`);
});