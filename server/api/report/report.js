'use strict';
const fs = require('fs')
const parse = require('csv-parse')
const path = require('path');

module.exports = (req, res) => {
  const csvFilePath = path.join(__dirname, '..', '..', 'static', `report.csv`);

  fs.readFile(csvFilePath, (err, fileData) => 
    parse(fileData, { columns: true }, (err, rows) => {
      const normalisedRows = rows.map(({ x, y }) => ([
        Number(x),
        Number(y)
      ]));
      res.status(200).send(normalisedRows);
    }));
}