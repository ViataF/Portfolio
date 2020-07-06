import React from "react";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div class="col s12 12m">
        <div class="card orange">
          <div class="card-content black-text">
            <span class="card-title">Mischa(collegue)</span>
            <p className="white-text">
              Viata is a driven, passionate and ambitious individual. She is
              always putting her best foot forward and let's no obstacles stand
              in her way. She also has a great sense of humor and works well
              with other. Viata is very focused and has a go getter attitude
              when it comes to achieving her goals. I believe she will be more
              than great in any work environment
            </p>
          </div>
        </div>
      </div>
      <div class="col s12">
        <div class="card green">
          <div class="card-content black-text">
            <span class="card-title">Doreen (collegue)</span>
            <p className="white-text">
              Viata Fredericks is a very dedicated individual who has shown
              great work , pay attention to details during her tasks and
              projects.She has prove herself that she has the ability and is
              capable of working on her own through stress and peer pressure.
            </p>
          </div>
        </div>
      </div>
      <div class="col s12 m6">
        <div class="card blue">
          <div class="card-content black-text">
            <span class="card-title">Ntombekazi Sibetyu (collegue)</span>
            <p className="white-text">
              Viata is passionate and always willing to learn new skills.She is
              a hard working individual and very dedicated to her work, she puts
              in the effort and time to improve her work. She is a team player
              and very easy to work with as i have had the opportunity to work
              with her.
            </p>
          </div>
        </div>
      </div>
      <div class="col s12 m6">
        <div class="card red">
          <div class="card-content black-text">
            <span class="card-title">Card Title</span>
            <p className="white-text">
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
