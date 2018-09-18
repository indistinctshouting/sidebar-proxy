const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
app.use('/restaurant/:id', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});