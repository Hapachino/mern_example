const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Working</h1>');
});

app.listen(PORT, () => {
  console.log('Server running on PORT', PORT);
}).on('error', (err) => {
  console.log('Server listen error');
});
