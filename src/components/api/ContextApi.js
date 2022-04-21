import { createContext } from "react";

export let NetworkContext = createContext();

let NetworkProvider = ({ children }) => {
    return (
        <NetworkContext.Provider value={{
            network: "jio",
            location: "mandya"
        }}>{children}
        </NetworkContext.Provider>
    )
}

export default NetworkProvider;