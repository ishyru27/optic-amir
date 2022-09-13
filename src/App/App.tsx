import { useReducer, FunctionComponent } from "react";
import Provider from "./context";
import { store } from "Core/store";
import { home } from "Core/Reducer/home";

const App: FunctionComponent = () => {
    const [state, dispatch] = useReducer(home, store);

    return (
        <Provider value={{ dispatch, state }}>
        </Provider>
    );
};

export default App;
