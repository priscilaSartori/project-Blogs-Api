const express = require('express');

const app = express();
const loginRoutes = require('./routes/login');

app.use(express.json());
app.use('/login', loginRoutes);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
