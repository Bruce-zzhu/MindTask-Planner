import Block from "./Block";

function Section(props) {
  return (
    <div style={{ margin: "10px 0px 10px 30px" }}>
      <Block data={props.data} key={props.data.id} />
    </div>
  );
}

export default Section;
