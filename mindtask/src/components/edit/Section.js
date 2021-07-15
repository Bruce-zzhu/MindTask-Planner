import Block from "./Block";

function Section(props) {
  console.log(props.category.name);
  return (
    <div style={{ margin: "10px 0px 10px 30px" }}>
      <Block data={props.category} key={props.category.name} />
    </div>
  );
}

export default Section;
