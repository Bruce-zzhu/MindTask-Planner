import React from "react";
import Section from "../../components/edit/Section";
import Card from "../../components/edit/Card";
import MindMap from "../../components/edit/MindMap"

const dummy = {
  name: "TooooDooooo",
  style: "category",
  "Assignment 1": {
    name: "Assignment 1",
    style: "category",
    Algorithms: {
      name: "Algorithms",
      style: "subcategory",
      Algorithms1: {
        name: "Dijkstra",
        style: "list",
      },
      Algorithms2: {
        name: "Prim",
        style: "list",
      },
      Algorithms3: {
        name: "BFS",
        style: "list",
      },
    },
  },
  "Assignment 2": {
    name: "Assignment 2",
    style: "category",
    Algorithms: {
      name: "Algorithms",
      style: "subcategory",
      Algorithms1: {
        name: "Support Vector Machine",
        style: "list",
      },
      Algorithms2: {
        name: "RNN",
        style: "list",
      },
      Algorithms3: {
        name: "DFS",
        style: "list",
      },
    },
  },
};
const EditPage = () => {
  return (
    <Card>
      <Section category={dummy} key={dummy.name} />
      <MindMap />
    </Card>
  );
};

export default EditPage;
