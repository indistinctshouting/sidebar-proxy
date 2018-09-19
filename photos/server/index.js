const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/restaurant/:id', express.static(__dirname + './../public'));

app.get('/restaurant/:id/photos', function(req, res) {
  console.log(req.params.id);
  dbMethods.getPhotos(req.params.id, function(err, data) {
    if (err) {
      res.sendStatus(503);
    } else {
      res.send(data);
    }
  });
});

// app.post('/photos', function(req, res) {
//   dbMethods.insertInfo(function(err, data) {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('successful post')
//     }
//   })
// })

app.listen(port, () => console.log(`listening on port ${port}!`));
