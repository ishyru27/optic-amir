require("dotenv").config();

const { logConsole, camelizeKeys } = require("../helpers");
const { execQueryOra } = require("../utils/execQueryOra");
const { formQueryAR, formQueryPY } = require("../querys");

const controller = {};

const schema = process.env.SCHEMA_DB;

controller.index = async (req, res) => {
    try {

        const { country, accountId } = req.query;
        
        if(country==='PY') {
            const { rows } = await execQueryOra(formQueryPY(schema, accountId));
            return res.json(camelizeKeys(rows));
        } else {
            const { rows } = await execQueryOra(formQueryAR(schema, accountId));
            return res.json(camelizeKeys(rows));
        }

    } catch (error) {
        logConsole(error);
        return res.status(404).json(`Error_SQL : ${error}`);
     }
 
};

module.exports = controller;
