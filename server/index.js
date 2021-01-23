const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});