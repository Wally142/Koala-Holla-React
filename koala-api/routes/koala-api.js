const express = require('express');
const router = express();

const pool = require('../modules/pool');

router.get('/koalas', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.error(err);
            res.status(500).send({ 'error': err });
        } else {
            db.query('SELECT * FROM koala', function (err, table) {
                done();
                if (err) {
                    return res.status(400).send({ error: err })
                } else {
                    return res.status(200).send(table.rows)
                }
            })
        }
    })
});// end get route

router.post('/new-koala', function (req, res) {
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const transfer = req.body.transfer;
    const notes = req.body.notes;

    pool.connect((err, db, done) => {
        if (err) {
            console.error('error open connection', err);
            return res.status(400).send({ error: err });
        }
        else {
            db.query('INSERT INTO koala(name, age, gender, transfer, notes ) VALUES ($1,$2,$3,$4,$5)',
                [name, age, gender, transfer, notes], (err, table) => {
                    done();
                    if (err) {
                        console.error('error running query', err);
                        return res.status(400).send({ error: err });
                    }
                    else {
                        console.log('Data Inserted: successfully!');
                        res.status(201).send({ message: 'Data Inserted!' })
                    }
                })
        }
    });
});//end post route

router.get('/remove/:id', function (req, res) {
    const id = req.params.id;

    pool.connect(function (err, db, done) {
        if (err) {
            return res.status(400).send(err)
        } else {
            db.query('DELETE FROM koala WHERE ID = $1', [Number(id)], function (err, result) {
                done();
                if (err) {
                    return res.status(400).send(err)
                } else {
                    return res.status(200).send({ message: 'successfully deleted record' })
                }
            })
        }
    })
});//end delete route

router.put('/update/:id', function (req, res) {
    const id = req.params.id

    pool.connect((err, db, done) => {
        if (err) {
            console.error('error open connection', err);
            return res.status(400).send({ error: err });
        }
        else {
            db.query('UPDATE koala SET transfer = true where id = $1;',
                [Number(id)], (err, table) => {
                    done();
                    if (err) {
                        console.error('error running query', err);
                        return res.status(400).send({ error: err });
                    }
                    else {
                        console.log('Data Inserted: successfully!');
                        res.status(201).send({ message: 'Data Inserted!' })
                    }
                })
        }
    });
});//end post route

module.exports = router;