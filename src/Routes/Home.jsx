import React from "react";
import Styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Dashboard from "./Dashboard";
const Home = () => {
  return (
    <div className={Styles.home}>
        <Sidebar />
      <div className={Styles.homecontener}>
      <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
