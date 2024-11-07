import { createRoot } from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import App from "./components/App.jsx";
import Home from "./Home.jsx"
import Random from "./components/Random.jsx"
import Recomendacion from "./components/Recomendacion.jsx"
import Pagina404 from "./components/404.jsx";


createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="random" element={<Random/>}/>
    </Route>
    <Route path="/Recomendacion" element={<App/>}>
      <Route index element={<Recomendacion/>}/>
    </Route>
    <Route path="*" element={<Pagina404/>}/> 
  </Routes>
 </BrowserRouter>
);
