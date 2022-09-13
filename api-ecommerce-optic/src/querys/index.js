conexion.query('SELECT * FROM empleados', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});


connection.end();

module.exports = { formQueryAR, formQueryPY };
