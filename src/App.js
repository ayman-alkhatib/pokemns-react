import { RouterProvider, } from "react-router-dom";
import { useContext } from "react";
import ContextProvider, { GlobalContext } from "./ContextProvider.jsx";
import { router } from "./router.js";



function App() {
  const [pokemonName, setPokemonName] = useContext(GlobalContext);
  return (
    <div className="App">
      <ContextProvider pokemonName>
        <RouterProvider router={router} />
      </ContextProvider>
    </div>
  );
}

export default App;
