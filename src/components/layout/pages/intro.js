import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import "./intro.css";
import me from "./images/me1.jpg";
class intro extends Component {
  state = {
    text: " Hello World",
    intro: "I'm Viata Fredericks",
    avatar_url: me,
    portfolio: "See my portfolio",
  };

  render() {
    const { avatar_url, intro, portfolio } = this.state;
    return (
      <div className="intro">
        {" "}
        <ReactTypingEffect
          text={[
            "hello",
            "Molo",
            "Dumela",
            "Sanibonani",
            "Hallo",
            "Thobela",
            "Avuwani",
          ]}
        />
        <div className="container">
          <img
            src={avatar_url}
            alt="Me"
            className="project_img"
            style={{
              width: "350px",
              borderRadius: "50%",
            }}
          />
          <h3>{intro}</h3>
          <p>Junior Software developer</p>
          <div>
            <Link
              to="/portfolio"
              className="btn btn-dark btn-sm my-1 animate__lightSpeedInRight"
            >
              {portfolio}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default intro;
