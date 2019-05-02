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
    .join('cohorts', 'cohorts.id', 'students.cohort_id')
    .select({ id: 'students.id', name:'students.name', cohort: 'cohorts.name'})
    .where({ 'students.id': req.params.id })
    .first()
    .then(student => {
        if(student) {
            res.status(200).json(student)
        } else (
            res.status(404).json({ message: "The specified student does not exist."})
        )
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
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