import Project from "./Project";

function JSProjects() {
  return (
    <div className="js-title">
      <div className="js-title-text">
        <b>VANILLA JAVASCRIPT</b>
      </div>
      <div className="single-project">
        <Project
          site="https://box-mover.netlify.app/"
          name="box-mover"
          link="https://github.com/tanerdundar/boxMover"
        />
        <Project
          site="https://mine-sweeper-ofa.netlify.app/"
          name="mine-sweeper game"
          link="https://github.com/tanerdundar/minesweeper"
        />
        <Project
          site="https://mvcalculate.netlify.app/"
          name="milletvekili hesaplama"
          link="https://github.com/tanerdundar/mvhesaplama"
        />
      </div>
    </div>
  );
}

export default JSProjects;
