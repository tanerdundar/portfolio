import Project from "./Project";

function JSProjects() {
  return (
    <div className="js-title">
      <div className="js-title-text">
        <b>VANILLA JAVASCRIPT</b>
      </div>
      <div className="single-project">
        <Project
          photo="https://raw.githubusercontent.com/tanerdundar/portfolio/master/portfolio/src/photo/box-move.jpg"
          site="https://box-mover.netlify.app/"
          name="box-mover"
          link="https://github.com/tanerdundar/boxMover"
        />
        <Project
          photo="https://raw.githubusercontent.com/tanerdundar/portfolio/master/portfolio/src/photo/mine.JPG"
          site="https://mine-sweeper-ofa.netlify.app/"
          name="mine-sweeper game"
          link="https://github.com/tanerdundar/minesweeper"
        />
        <Project
          photo="https://raw.githubusercontent.com/tanerdundar/portfolio/master/portfolio/src/photo/mvhesap.JPG"
          site="https://mvcalculate.netlify.app/"
          name="milletvekili hesaplama"
          link="https://github.com/tanerdundar/mvhesaplama"
        />
      </div>
    </div>
  );
}

export default JSProjects;
