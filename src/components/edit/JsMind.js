import React from "react";
import jsMind from "jsmind";
import "jsmind/style/jsmind.css";

// initially from https://github.com/xiaohuoz/jsmind-react/blob/master/index.html
export class ReactJsmind extends React.Component {
  componentDidMount() {
    const { mind, options, setOnDump } = this.props;

    // so we can call this method on parent component
    setOnDump(this.onDump.bind(this));

    const opt = {
      ...options,
      container: "jsmind_container",
    };
    const jm = new jsMind(opt);
    this.jm = jm;
    jm.show(mind);
  }

  componentDidUpdate() {
    this.jm.show(this.props.mind);
  }

  render() {
    return <div id="jsmind_container" style={this.props.styles}></div>;
  }

  onDump() {
    return this.jm.get_data();
  }
}

export default ReactJsmind;
