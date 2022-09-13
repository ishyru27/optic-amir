//const { camelCase } = require("lodash/camelCase");
const { snakeCase } = require("lodash");
const camelizeKeys = obj => {
    if (Array.isArray(obj)) {
        return obj.map(v => camelizeKeys(v));
    } else if (obj != null && obj.constructor === Object) {
        return Object.keys(obj).reduce(
            (result, key) => ({
                ...result,
                [snakeCase(key)]: obj[key]
            }),
            {}
        );
    }
    return obj;
};

const logConsole = msg =>
    console.log(
        `Date: ${new Date()} -  ${JSON.stringify(
            msg,
            Object.getOwnPropertyNames(msg)
        )}`
    );

module.exports = { camelizeKeys, logConsole };
