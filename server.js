const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const urlSidebar = 'http://yelp-sidebar.hv38tyz7mj.us-west-2.elasticbeanstalk.com';
const urlPhotos = '';
const urlReviews = '';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/:id', express.static(__dirname + '/public/dist'));

// app.get('/summary/id/:id/', (req, res) => {
//   let id = req.params.id;
//   res.redirect(`${urlSidebar}/summary/id/${id}`);
// });

app.get('/reviews/id/:id/', (req, res) => {
  let id = req.params.id;
  res.redirect(`${urlReviews}/reviews/id/${id}`)
});

app.get('/photos/:rest_id', (req, res) => {
  let id = req.params.rest_id;
  res.redirect(`${urlPhotos}/photos/${id}`)
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});