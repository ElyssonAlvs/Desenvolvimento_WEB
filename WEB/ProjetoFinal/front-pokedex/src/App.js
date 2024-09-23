// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Pokemons from "./pages/Pokemon";



// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <Home />,
//       children: [
//           {
//             path: "/pokemons",
//             element: <Pokemons />,
//           },
//           {
//             path: "/mypokedex",
//             element: <MyPokedex />
//           },
//           {
//             path: "/generations",
//             element: <Generations />,
//           }
//       ]
//   }
// ]);


function App() {
  return (
    <>
      <Home />
      <Pokemons />
    </>
  );
}

export default App;


