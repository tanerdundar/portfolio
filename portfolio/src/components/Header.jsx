import { useEffect, useState } from "react";

function Header() {
  const [occupation, setOccupation] = useState("");
  const occupations = ["Web Developer", "React Developer", "Java Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOccupation(occupations[index]);
      setIndex((prevIndex) => (prevIndex + 1) % occupations.length);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="header">
      <div className="head">
        <div className="name">Taner Dündar</div>
        <div className="occupation">{occupation}</div>
      </div>
      <div className="photo"></div>
    </div>
  );
}

export default Header;
