const oracledb = require("oracledb");
let connection;

const execQueryOra = async (query) => {
    try {
        connection = await oracledb.getConnection({
            user: process.env.USERNAME_DB,
            password: process.env.PASSWORD_DB,
            connectionString: process.env.URL_DB
        });
        oracledb.autoCommit = true;
        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
        const result = await connection.execute(query);

        if (connection) {
            try {
                //console.log("Successfully operation to Oracle Database");
                await connection.close();
            } catch (err) {
                console.log(err);
            }
        }

        return result;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { execQueryOra };