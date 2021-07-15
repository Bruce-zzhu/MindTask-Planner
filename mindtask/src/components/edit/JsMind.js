import React from "react";
import jsMind from "jsmind";
import "jsmind/style/jsmind.css";

// initially from https://github.com/xiaohuoz/jsmind-react/blob/master/index.html
export class ReactJsmind extends React.Component {
  componentDidMount() {
    const { mind, options } = this.props;
    const opt = {
      ...options,
      container: "jsmind_container",
    };
    const jm = new jsMind(opt);
    this.jm = jm;
    jm.show(mind);

    this.jm = jm;
  }
  componentWillReceiveProps(props) {
    const { mind, options } = props;
    const opt = {
      ...options,
      container: "jsmind_container",
    };
    this.jm.show(mind);
    // console.log(this.jm.current);
  }
  getNode = (e) => {
    // console.log(e.target, e.currentTarget);
    // console.log(e.handler);
    // console.log(e.target.nodeName,e.target.nodeType,e.target.nodeValue);
    // console.log(e.target.innerHTML);
    if (e.target.nodeName === "DIV") {
    }
  };
  render() {
    const { styles, onClick, onContextMenu, onMouseDown, onMouseUp } =
      this.props;
    return (
      <div
        id="jsmind_container"
        onClick={(e) => {
          // console.log('click');
          this.realSelectNode = this.getNode(e);
          if (onClick) {
            onClick(e, this.realSelectNode);
          }
        }}
        onMouseDown={(e) => {
          // console.log('down');
          this.realSelectNode = this.getNode(e);
          if (onMouseDown) {
            onMouseDown(e, this.realSelectNode);
          }
        }}
        onMouseUp={(e) => {
          // console.log('up');
          this.realSelectNode = this.getNode(e);
          if (onMouseUp) {
            onMouseUp(e, this.realSelectNode);
          }
        }}
        onContextMenu={(e) => {
          // console.log('contextMenu');
          this.realSelectNode = this.getNode(e);
          if (onContextMenu) {
            onContextMenu(e, this.realSelectNode);
          }
        }}
        style={this.props.styles}
      ></div>
    );
  }
}

export default ReactJsmind;
