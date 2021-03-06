require('dotenv').config();
const compression = require('compression');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});