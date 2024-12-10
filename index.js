const ip = require('ip');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World!',
    ip: `ip address of the server is ${ip.address()}`,
    
  });
});
app.listen(3000, () => {
  console.log('Server is running at http://' + ip.address() + ':3000');
});
