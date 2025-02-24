import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />
      <main className=" flex-grow lg:mt-20 mt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
