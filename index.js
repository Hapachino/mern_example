const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Working</h1>');
});

app.get('/api/test', (req, res) => {
  const data = {
    success: true,
    message: 'Test API working',
    another: 'just a test',
  };

  res.send(data);
});

app.get('/api/user', (req, res) => {
  const user = {
    email: 'john@mail.com',
    name: 'John Doe',
    username: 'john',
  };

  res.send(user);
});

app.post('/api/send-message', (req, res) => {
  console.log('Data from client:', req.body);

  res.send({
    success: true,
    dataReceived: req.body,
  });
});

app.listen(PORT, () => {
  console.log('Server running on PORT', PORT);
}).on('error', (err) => {
  console.log('Server listen error');
});
4