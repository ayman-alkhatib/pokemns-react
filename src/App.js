import { RouterProvider, } from "react-router-dom";
import { router } from "./router.js";



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
