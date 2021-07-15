import React from "react";
import logo from "./corner.svg";
import mind from "./index_mind.png";
import inImage from "./in.png";

class Index extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, height: "100vh" }}>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            paddingTop: "5%",
            paddingRight: "20%",
          }}
        >
          <text style={{ fontSize: "5vw" }}>Plan Your Projects</text>
        </div>
        <div>
          <img
            style={{ position: "absolute", width: "auto", bottom: "0%" }}
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <img
            src={mind}
            style={{
              position: "absolute",
              width: "20%",
              top: "50%",
              right: "20%",
            }}
            alt="a mind img"
          ></img>
        </div>
        <div>
          <img
            style={{
              position: "absolute",
              width: "auto",
              top: "40%",
              right: "50%",
            }}
            src={inImage}
            alt="in"
          />
        </div>
        <form action="/login">
          <button
            style={{
              position: "absolute",
              top: "57%",
              left: "26%",
              height: "7%",
              width: "10%",
              background: "#EAF2FA",
              borderRadius: "20px",
              border: "none",
              fontSize: "30px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default Index;
