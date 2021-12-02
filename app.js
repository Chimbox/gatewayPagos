const express = require('express');

const router = require('./routes/routes');

const app = express();

const cors = require('cors');

const config = require('./config/config.js');

const formidable = require('express-formidable');


//Midlewares
app.use(cors(
  config.application.cors.server
));
app.use(formidable());
app.use(express.json());
app.use('/res', router);

app.listen(3002, () => {
  console.log('Gateway corriendo');
});