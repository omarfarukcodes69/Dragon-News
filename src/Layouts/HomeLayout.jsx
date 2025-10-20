import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import LeftSide from "../Components/HomeLayout/LeftSide/LeftSide";
import RightSide from "../Components/HomeLayout/RightSide/RightSide";
import CatagoryPage from "../Pages/CatagoryPage";
import PersentageLoading from "../Components/Loaders/PersentageLoading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="w-10/12 mx-auto">
      <header className=" space-y-5">
        <Header />
        <section>
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-5 my-15">
        <aside className=" col-span-3">
          <LeftSide />
        </aside>
        <section className="main col-span-6">
          {state ? <Outlet></Outlet> : <PersentageLoading />}
        </section>
        <aside className=" col-span-3">
          <RightSide />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
