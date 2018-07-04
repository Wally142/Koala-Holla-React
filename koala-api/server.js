const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./routes/koala-api');

const PORT = 5000;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(PORT, () => console.log('Listening on port', PORT));