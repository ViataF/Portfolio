import React, { Fragment } from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <h2 className="about">About me</h2>
      <div className="section biography">
        <h3 className="biography">Biography</h3>
        <p>
          I am a hardworking and highly dedicated individual. I embrace new
          challenges and love to explore new opportunities. My purpose is to
          broaden my knowledge and develop new skills.
        </p>
      </div>
      <div className="timeline">
        <div className="timeline-event">
          <div className="card timeline-content">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Education<i className="material-icons right">more_vert</i>
              </span>
              <p>Matric (year and school): Claremont High School (2019)</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Education<i className="material-icons right">close</i>
              </span>
              <p>Matric - Claremont High School : 2015-2019</p>
            </div>
          </div>
          <div className="timeline-badge red white-text">
            <i className="material-icons">school</i>
          </div>
        </div>
        <div className="timeline-event">
          <div className="card timeline-content">
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                Work experience
                <i className="material-icons right">more_vert</i>
              </span>
              <p> Sevens Rugby Period: 13-15 November 2019 Role: Usher</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
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
          <div className="timeline-badge blue white-text">
            <i className="material-icons">work</i>
          </div>
        </div>
        <div className="timeline-event">
          <div className="card timeline-content activator">
            <div className="card-content activator">
              <span className="card-title activator grey-text text-darken-4">
                Voluntary work
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                Company: PlumPets Period: 2018, Company: Parkhaven Senior
                Citizen (Wynberg) Period: 2018
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
                <li> Helped to clean</li>
                <li> Helped to serve food</li>
                <li> Spending time with elderly</li>
              </ul>
              <ul>
                Duties(PlumPets):
                <li> Taking dogs for walks</li>
              </ul>
            </div>
          </div>
          <div className="timeline-badge green white-text">
            <i className="material-icons">person</i>
          </div>
        </div>
      </div>
      <section>
        <h3 className="hobbies-heading">Hobbies</h3>
        <ol className="hobbies">
          <li>Reading ebooks</li>
          <li>Walking</li>
          <li>Playing the Viola</li>
          <li>Baking</li>
          <li>Swimming</li>
        </ol>
      </section>
      <section>
        <h3 className="passion">Where my tech passion came from:</h3>
        <p>
          I was exposed to coding at high school via a business called Code 4
          Cape Town. I have always had a knack for computers and people always
          asked me to assist them with their challenges concerning computers and
          cell phones.
        </p>
      </section>
      <section className="skillbar">
        <h3 className="hobbies-heading">Skills</h3>
        <p>HTML</p>
        <div class="container-skillbar">
          <div class="skills html">80%</div>
        </div>

        <p>CSS</p>
        <div class="container-skillbar">
          <div class="skills css">75%</div>
        </div>

        <p>JavaScript</p>
        <div class="container-skillbar">
          <div class="skills js">55%</div>
        </div>

        <p>Python</p>
        <div class="container-skillbar">
          <div class="skills python">65%</div>
        </div>
      </section>
    </div>
  );
};
export default About;
