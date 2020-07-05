import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import "./intro.css";
class intro extends Component {
  state = {
    text: " Hello World",
    intro: "I'm Viata Fredericks",
    avatar_url:
      "https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    portfolio: "See my portfolio",
  };

  render() {
    const { text, avatar_url, intro, portfolio } = this.state;
    return (
      <div className="intro">
        {" "}
        <ReactTypingEffect text={text} />
        <div className="container">
          <img
            src={avatar_url}
            alt="Me"
            style={{ width: "250px" }}
            className="project_img"
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
