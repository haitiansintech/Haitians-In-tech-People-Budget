const router = require('express').Router();
const { parse } = require('csv');
const fs = require("fs");



router.get('/', async (req, res) => {
    fs.createReadStream(__dirname+'../../../data/MEF-2021-2022-TEB-English.csv').pipe(parse({ columns: true }, (err, records) => {
        let tempRecord = records;
        for (let i = 0; i < tempRecord.length; i++) {
            delete tempRecord[i]["112,895,190,744.66"];
            delete tempRecord[i][""];
            delete tempRecord[i]["$959,609,121.33 "];
        }

        if (req.query.category) {
            tempRecord = tempRecord.filter(record => {
                return record["Category"].toLowerCase() === req.query.category.toLowerCase();
            })
        }

        if (req.query["governing body"]) {
            tempRecord = tempRecord.filter(record => {
                return record["Governing Body"].toLowerCase() === req.query["governing body"].toLowerCase();
            })
        }

        if (req.query["governing function"]) {
            tempRecord = tempRecord.filter(record => {
                return record["Government Function"].toLowerCase() === req.query["governing function"].toLowerCase();
            })
        }

        res.send(tempRecord)
    }));
})

module.exports = { router };