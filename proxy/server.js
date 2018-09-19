const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/:id', express.static(__dirname + '/public'));


app.get('/summary/id/:id/', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3003/summary/id/${id}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/reviews/id/:id/', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3002/reviews/id/${id}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/photos/:rest_id', (req, res) => {
  let id = req.params.id;
  axios.get(`http://localhost:3001/photos/${id}`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});