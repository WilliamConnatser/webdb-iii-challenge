exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', tbl => {
        tbl.increments('id');
        tbl.string('name', 80)
            .notNullable();
        tbl.integer('cohort_id')
            .notNullable()
            .references('id')
            .inTable('cohorts');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};