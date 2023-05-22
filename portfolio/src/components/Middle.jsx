import About from "./About";
import Info from "./Info";
import Other from "./Other";
import Skills from "./Skills";

function Middle() {
  return (
    <div className="mid">
      <div className="midd about">
        <About />
      </div>
      <div className="midd info">
        <Skills />
        <Info />
      </div>
      <div className="midd other">
        <Other />
      </div>
    </div>
  );
}

export default Middle;
