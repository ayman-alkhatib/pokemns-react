import { createContext, useState } from "react";

export const GlobalContext = createContext("");

function ContextProvider({ children }) {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <>
      <GlobalContext.Provider value={{ pokemonName, setPokemonName }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default ContextProvider;
