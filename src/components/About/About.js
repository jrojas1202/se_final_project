import { Link } from "react-router-dom";
import "./About.css";
import leftArrow from "../../images/left-arrow.png";

const About = ({ isLoading }) => {
  return (
    <section id="about" className="about">
      {isLoading ? (
        <div></div>
      ) : (
        <>
          {" "}
          <Link to="/" style={{ width: "fit-content" }}>
            <img className="about__back" src={leftArrow} alt="Back Arrow" />
          </Link>
          <h2 className="about__title">About the author</h2>
          <div className="about__content">
            <p className="about__paragraph">
              Hello my name is John Rojas I'm a sofware developer. I enjoy
              sports video games and music. This project serves as a love letter
              to a gaming franchise I grew up with by implementing my skills as
              a developer.
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default About;
