const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3002;


app.use('/restaurant/:id', express.static(__dirname + './../public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/restaurant/:id/photos', function(req, res) {
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
