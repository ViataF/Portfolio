import React from "react";
import "./About.css";
import portrait from "./images/me1.jpg";
const About = () => {
  return (
    <div className=" about ">
      <div></div>
      <h2 className="heading">My Profile</h2>
      <section className="details">
        <img src={portrait} alt="portrait of self" className="profile_img" />

        <ul className="basic-details">
          <li className="name"> Viata Fredericks</li>
          <li>
            <span>Age: </span> 18
          </li>
          <li>
            <span>Gender: </span> Female
          </li>
          <li>
            <span> Location: </span> Wynberg, Cape Town
          </li>
          <li>
            <span> Passion Board: </span>
            Reading ebooks, Walking, Playing Viola , Baking, Swimming
          </li>
          <li>
            <span>Bio:</span> I am a hardworking and highly dedicated
            individual. I embrace new challenges and love to explore new
            opportunities. My purpose is to broaden my knowledge and develop new
            skills.
          </li>
        </ul>
      </section>

      <section className="center"></section>
      <section className="techPassion">
        <h3 className="passion">Initial Passion</h3>
        <p className="initial-passion">
          I was exposed to coding at high school via a business called Code 4
          Cape Town. I have always had a knack for computers and people always
          asked me to assist them with their challenges concerning computers and
          cell phones.
        </p>
        <section className="skillbar">
          <h3 className="skills-heading center"> Coding Skills</h3>
          <p className="language">HTML</p>
          <div className="container-skillbar">
            <div className="skills html">80%</div>
          </div>

          <p className="language">CSS</p>
          <div className="container-skillbar">
            <div className="skills css">75%</div>
          </div>

          <p className="language">JavaScript</p>
          <div className="container-skillbar">
            <div className="skills js">55%</div>
          </div>

          <p className="language">Python</p>
          <div className="container-skillbar">
            <div className="skills python">65%</div>
          </div>
        </section>
      </section>

      <div className="timeline center">
        <div className="card timeline-content">
          <div className="card-content">
            <span className="card-title activator ">
              <i className="material-icons blue-text">school</i> Education
              <i className="material-icons right">more_vert</i>
            </span>
            <p className="content">
              Matric (year and school): Claremont High School (2019)
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Education<i className="material-icons right">close</i>
            </span>
            <p className="content">
              Matric - Claremont High School : 2015-2019
            </p>
          </div>
        </div>
        <div className="card timeline-content">
          <div className="card-content">
            <span className="card-title activator">
              <i className="material-icons green-text">work</i> Work experience
              <i className="material-icons right">more_vert</i>
            </span>
            <p className="content">
              {" "}
              Sevens Rugby Period: 13-15 November 2019 Role: Usher
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title">
              Sevens Rugby Period: 13-15 November 2019 Role: Usher
              <i className="material-icons right">close</i>
            </span>
            <ol>
              Duties:
              <li>Direct people to their seats</li>
              <li> Navigate people to certain areas</li>
            </ol>
          </div>
        </div>

        <div className="card timeline-content activator">
          <div className="card-content activator">
            <span className="card-title activator ">
              <i className="material-icons red-text">favorite</i> Voluntary Work
              <i className="material-icons right">more_vert</i>
            </span>
            <p className="content ">
              Company: PlumPets Period: 2018, Company: Parkhaven Senior Citizen
              (Wynberg) Period: 2018
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Company: Parkhaven Senior citizen (Wynberg) Period: 2018
              <i className="material-icons right">close</i>
              Company: PlumPets Period: 2018
            </span>
            <ul>
              Duties(Parkhaven):
              <li> # Helped to clean</li>
              <li> # Helped to serve food</li>
              <li> # Spending time with elderly</li>
            </ul>
            <ul>
              Duties(PlumPets):
              <li> # Taking dogs for walks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
