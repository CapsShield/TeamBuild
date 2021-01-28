require('dotenv').config();
const compression = require('compression');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(compression());
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});