const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const router = express.Router();
const db = knex(knexConfig.development);

router.post('/', (req, res) => {
    db.insert(req.body)
        .into('cohorts')
        .then(data => {
            res.status(200).send(data);
        });
});

router.get('/', (req, res) => {
    db('cohorts')
        .then(data => {
            res.status(200).send(data);
        }).catch(err => res.status(200).send(err));
});

router.get('/:id', (req, res) => {
    db('cohorts')
        .where({
            id: req.params.id
        })
        .first()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => res.status(200).send(err));
});

router.get('/:id/students', (req, res) => {
    db('cohorts')
        .where({
            id: req.params.id
        })
        .join('students', 'cohorts.id', 'students.cohort_id')
        .then(students => {
            res.status(200).json(students)
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
});

router.put('/:id', (req, res) => {
    db('cohorts')
        .where({
            id: req.params.id
        })
        .update(req.body)
        .then(data => {
            res.status(200).json(data);
        }).catch(err => res.status(200).send(err));
});

router.delete('/:id', (req, res) => {
    db('cohorts')
        .where({
            id: req.params.id
        })
        .del()
        .then(data => {
            res.status(200).json(data);
        }).catch(err => res.status(200).send(err));
});

module.exports = router;