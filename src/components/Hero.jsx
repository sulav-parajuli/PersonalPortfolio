import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container hcontainer">
      <div className="hero-container">
        <div className="text-container">
          <div className="text-block">
            <p className="mb-0 sub-text">Sulav Parajuli</p>
            <h1 className="main main-text">
              Graphic Designer and <br /> Web <span>Developer</span>
            </h1>
            <p className="sub-text">
              I'm a web developer with expertise in front-end techniques,
              graphic and UI design, backend development, and creating visually
              appealing interfaces. I’m passionate about expanding my skills and
              making impactful contributions to technology.
            </p>
          </div>
          <div className="buttons" id="hostevent">
            <Link
              to="main-event" // This should match the target component's name
              smooth={true}
              duration={500}
              className="main-button no-smooth-scroll"
            >
              View Projects
            </Link>
            <button className="sub-button">Read About Me</button>
          </div>
        </div>
        <div className="image-container">
          <img
            //   src={mainimage}
            className="main-image"
            alt="EthTix"
            title="EthTix Event"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
