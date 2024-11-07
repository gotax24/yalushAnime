import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
