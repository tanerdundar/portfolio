function Project(props) {
  const goToWebsite = () => {
    let url = props.site;
    window.open(url, "_blank");
  };
  return (
    <div className="project">
      <div
        onClick={goToWebsite}
        className="project-photo"
        style={{ backgroundImage: `url(${props.photo})`, cursor: "pointer" }}
      ></div>
      <div className="project-name">{props.name}</div>
      <div className="project-link">
        <a href={props.link} target="_blank">
          on Github
        </a>
      </div>
    </div>
  );
}

export default Project;
