const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const routes = require('./routes/contact'); // 👈 check what’s coming back
console.log('Routes export:', routes);

app.use('/', routes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
