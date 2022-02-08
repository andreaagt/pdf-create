const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

// Handlebars
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Routes
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
