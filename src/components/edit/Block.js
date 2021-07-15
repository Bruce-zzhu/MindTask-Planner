import React from "react";
import Section from "./Section";
class Block extends React.Component {
  state = {
    on: false,
    data: [],
    style: {
      category: {
        fontSize: "40px",
        cursor: "pointer",
        fontFamily: "Permanent Marker, cursive",
      },
      subcategory: {
        fontSize: "30px",
        cursor: "pointer",
        fontFamily: "Permanent Marker",
      },
      list: {
        fontSize: "20px",
        cursor: "pointer",
        // fontFamily: "Permanent Marker, cursive",
      },
    },
  };
  expand() {
    let arr = [];
    this.setState({ on: !this.state.on });
    if (this.props.data.children) {
      this.props.data.children.forEach((child) => {
        arr.push(<Section data={child} key={child.id} />);
      });
    }
    this.setState({ data: arr });
  }

  render() {
    return (
      <div key={this.props.data.name}>
        <div
          style={this.state.style["list"]}
          onClick={() => {
            this.expand();
          }}
        >
          {this.props.data.topic}
        </div>
        {this.state.on ? this.state.data : ""}
      </div>
    );
  }
}

export default Block;
