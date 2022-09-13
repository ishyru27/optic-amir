import get from "lodash/get";
import isString from "lodash/isString";
import client from "./graphql";
import isArray from "lodash/isArray";
import i18n from "Constants/i18n";
import { ADD_INITIAL_VALUE, SET_TOAST_MESSAGE } from "Core/Types";
import { isObject } from "lodash";

const mainError = (dispatch: any, error: any, onError?: any) => {
    let description = error;
    if (!isString(description)) {
        if (isObject(error))
            description = get(error, "message", i18n.notAvailable);
        if (isArray(error))
            description = get(error, "0.message", i18n.notAvailable);
    }
    if (!onError)
        return dispatch({
            type: SET_TOAST_MESSAGE,
            value: {
                type: "error",
                description: description || "",
                message: i18n.errorAction
            }
        });

    return onError(error);
};

const mainFinally = (dispatch: any, notSpinner?: boolean, onFinally?: any) => {
    if (!notSpinner)
        dispatch({
            type: ADD_INITIAL_VALUE,
            value: {
                requestFlag: false
            }
        });
    if (onFinally) onFinally();
    return;
};

class methods {
    constructor() {
        this.mutate = this.mutate.bind(this);
        this.query = this.query.bind(this);
    }
    async mutate(
        dispatch: any,
        execute: any,
        succeeded: any,
        onError?: any,
        notSpinner?: boolean,
        navigateTo?: any,
        onFinally?: any
    ) {
        if (!notSpinner)
            dispatch({
                type: ADD_INITIAL_VALUE,
                value: {
                    requestFlag: true
                }
            });

        client
            .mutate(execute)
            .then(({ data }) => {
                succeeded(data);
                navigateTo && navigateTo();
                return console.log("llamada Exitosa");
            })
            .catch(({ error }) => {
                mainError(dispatch, error, onError);
                return console.log("llamada no exitosa");
            })
            .finally(() => {
                mainFinally(dispatch, notSpinner, onFinally);
            });
        return;
    }

    async query(
        dispatch: any,
        execute: any,
        succeeded: any,
        onError?: any,
        notSpinner?: boolean,
        navigateTo?: any,
        onFinally?: any
    ) {
        if (!notSpinner)
            dispatch({
                type: ADD_INITIAL_VALUE,
                value: {
                    requestFlag: true
                }
            });

        client
            .query(execute)
            .then(({ data }) => {
                succeeded(data);
                navigateTo && navigateTo();
                return console.log("llamada Exitosa");
            })
            .catch(({ error }) => {
                mainError(dispatch, error);
                return console.log("llamada no exitosa");
            })
            .finally(() => {
                mainFinally(dispatch, notSpinner, onFinally);
            });
        return;
    }
}

export default new methods();
