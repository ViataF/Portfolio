import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="carousel carousel-slider center">
        <div className="carousel-fixed-item center">
          <a className="btn waves-effect white grey-text darken-text-2">
            button
          </a>
        </div>
        <div className="carousel-item red white-text" href="#one!">
          <h2>Mischa(collegue)</h2>
          <p className="white-text">
            Viata is a driven, passionate and ambitious individual. She is
            always putting her best foot forward and let's no obstacles stand in
            her way. She also has a great sense of humor and works well with
            other. Viata is very focused and has a go getter attitude when it
            comes to achieving her goals. I believe she will be more than great
            in any work environment.
          </p>
        </div>
        <div className="carousel-item amber white-text" href="#two!">
          <h2>Second Panel</h2>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item green white-text" href="#three!">
          <h2>Third Panel</h2>
          <p className="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item blue white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
