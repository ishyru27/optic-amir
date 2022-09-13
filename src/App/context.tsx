import { createContext, ReactNode } from "react"

export const CONTEXT = createContext({});

type ProviderType = {
    value: any | any[]
    children: ReactNode
}

const Provider = ({value, children} : ProviderType) => (
    <CONTEXT.Provider value={value}>
        {children}
    </CONTEXT.Provider>
);

export default Provider;