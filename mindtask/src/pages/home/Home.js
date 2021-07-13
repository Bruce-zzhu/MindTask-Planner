import React from "react";
import "./Home.css";
import Calendar from '../../components/calendar/Calendar';


class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <Calendar/>
        <h2 className="ongoing">Ongoing Peojects</h2>
        <h2 className="past">Past Projects</h2>
      </div>
    );
  }
};

export default Home;
