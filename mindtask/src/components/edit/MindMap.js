import react from "react";

import JsMind from "./JsMind";

function createMind(data) {
  return {
    /* 元数据，定义思维导图的名称、作者、版本等信息 */
    meta: {
      name: "jsMind-demo-tree",
      author: "",
      version: "0.2",
    },
    /* 数据格式声明 */
    format: "node_tree",
    /* 数据内容 */
    data,
  };
}

/*
  data: {
    id: "root",
    topic: "jsMind",
    children: [
      {
        id: "easy",
        topic: "Easy",
        direction: "left",
        expanded: false,
        children: [
          { id: "easy1", topic: "Easy to show" },
          { id: "easy2", topic: "Easy to edit" },
          { id: "easy3", topic: "Easy to store" },
          { id: "easy4", topic: "Easy to embed" },
        ],
      },
      {
        id: "open",
        topic: "Open Source",
        direction: "right",
        expanded: true,
        children: [
          { id: "open1", topic: "on GitHub" },
          { id: "open2", topic: "BSD License" },
        ],
      },
      {
        id: "powerful",
        topic: "Powerful",
        direction: "right",
        children: [
          { id: "powerful1", topic: "Base on Javascript" },
          { id: "powerful2", topic: "Base on HTML5" },
          { id: "powerful3", topic: "Depends on you" },
        ],
      },
      {
        id: "other",
        topic: "test node",
        direction: "left",
        children: [
          { id: "other1", topic: "I'm from local variable" },
          { id: "other2", topic: "I can do everything" },
        ],
      },
    ],
  },
*/

export class MindMap extends react.Component {
  getData = null;

  render() {
    const mind = createMind(this.props.data);
    const options = {
      theme: "primary",
      editable: true,
      support_html: false, // 是否支持节点里的HTML元素
    };

    return (
      <div>
        <button onClick={this.dumpProject.bind(this)}>save</button>
        <p>
          Press 'Enter' to add same level item, and 'Insert' to add next level
          item. 'Del' to delete a node.
        </p>
        <br />
        <JsMind
          mind={mind}
          options={options}
          styles={{ height: 500, width: 1000 }}
          setOnDump={this.setOnDump.bind(this)}
        />
      </div>
    );
  }

  setOnDump(func) {
    this.getData = func;
  }

  dumpProject() {
    const data = this.getData();
    this.props.onMapChange(data.data);
  }
}

export default MindMap;
