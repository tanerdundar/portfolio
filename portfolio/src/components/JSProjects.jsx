import Project from "./Project";
let jsProjects = [
  {
    name: "box-mover",
    photo:
      "https://raw.githubusercontent.com/tanerdundar/portfolio/master/portfolio/src/photo/box-mover.jpg",
    site: "https://box-mover.netlify.app/",
    link: "https://github.com/tanerdundar/boxMover",
  },
  {
    name: "mine-sweeper game",
    photo:
      "https://raw.githubusercontent.com/tanerdundar/portfolio/master/portfolio/src/photo/mine.JPG",
    site: "https://mine-sweeper-ofa.netlify.app/",
    link: "https://github.com/tanerdundar/minesweeper",
  },
  {
    name: "vekil hesaplama",
    photo:
      "https://raw.githubusercontent.com/tanerdundar/portfolio/master/portfolio/src/photo/mvhesap.JPG",
    site: "https://mvcalculate.netlify.app/",
    link: "https://github.com/tanerdundar/mvhesaplama",
  },
];

function JSProjects() {
  return (
    <div className="js-title">
      <div className="js-title-text">
        <b>VANILLA JAVASCRIPT</b>
      </div>
      <div className="single-project">
        {jsProjects.map((e) => {
          return (
            <Project
              photo={e.photo}
              site={e.site}
              name={e.name}
              link={e.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default JSProjects;
