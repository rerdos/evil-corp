'use strict';
const cors = require('cors');
const express = require('express');
const app = express();
const reportApi = require('./api/report/report');

app.set('port', process.env.PORT || 4444);

app.use(cors({ origin: '*' }));

app.get('/api/data/report', reportApi);

app.listen(app.get('port'), () =>
  console.log("EvilCorp server is running at: " + app.get('port')));