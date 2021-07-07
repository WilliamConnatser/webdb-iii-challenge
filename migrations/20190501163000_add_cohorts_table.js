exports.up = function (knex, Promise) {
    return knex.schema.createTable('cohorts', tbl => {
        tbl.increments('id');
        tbl.string('name', 80)
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};