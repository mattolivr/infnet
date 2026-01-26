import { Outlet } from "react-router";
import Header from "../../../components/layout/header";
import Menu from "../../../components/layout/menu";
import { MenuProvider } from "../../../components/layout/menu/context";

export default function MainLayout() {
  return (
    <MenuProvider>
      <div className="app">
        <div id="container">
          <Header sticky />
          <Menu />
          <Outlet />
        </div>
      </div>
    </MenuProvider>
  );
}
