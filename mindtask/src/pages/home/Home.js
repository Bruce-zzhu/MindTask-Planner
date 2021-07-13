import React from "react";
import "./Home.css";
import Calendar from '../../components/calendar/Calendar';


const Home = () => {
  return (
    <div className="home">
      <Calendar/>

      <h2 className="ongoing">Ongoing Peojects</h2>

      <h2 className="past">Past Projects</h2>
    </div>
  );
};
export default Home;
