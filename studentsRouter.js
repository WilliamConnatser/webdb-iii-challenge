const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const router = express.Router();
const db = knex(knexConfig.development);

router.post('/', (req, res) => {
    db.insert(req.body)
        .into('students')
        .then(data => {
            res.status(200).send(data);
        }).catch(err => res.status(200).send(err));
});

router.get('/', (req, res) => {
    db('students')
        .then(data => {
            res.status(200).send(data);
        }).catch(err => res.status(200).send(err));
});

router.get('/:id', (req, res) => {
    db('students')
        .where({
            id: req.params.id
        })
        .leftJoin('cohorts', 'students.cohort_id', 'cohorts.id')
        .first()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => res.status(200).send(err));
});

router.put('/:id', (req, res) => {
    db('students')
        .where({
            id: req.params.id
        })
        .update(req.body)
        .then(data => {
            res.status(200).json(data);
        }).catch(err => res.status(200).send(err));
});

module.exports = router;