import {
    EXAMPLE,
} from "../Types";

export const home = (state: any, action: any): any => {
    switch (action.type) {
        case EXAMPLE:
            return {
                ...state,
                displayTable: {
                    ...state.displayTable,
                    tableState: action.value
                }
            };
        default:
            return {
                ...state
            };
    }
};
