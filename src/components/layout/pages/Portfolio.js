import React, { Component } from "react";
import PortfolioItem from "./PortfolioItems";

import github_finder from "./images/github_finder.jpg";
import it_logger from "./images/it-logger.PNG";
import contact_keeper from "./images/Login-system.PNG";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {
    title: "Viata Fredericks Portfolio",
    portfolios: [
      {
        id: 1,
        project_url: "https://github.com/ViataF/IT-LOGGER",
        project_img: it_logger,
        project_name: "IT Logger",
        project:
          " React app to track IT department tasks and issues. Uses JSON-Server as a mock backend. ",
      },
      {
        id: 2,
        project_url: "https://github.com/ViataF/LoginSystem",
        project_img: contact_keeper,
        project_name: "Contact Keeper",
        project:
          " Full stack MERN contact manager with React hooks, context & JWT authentication. ",
      },
      {
        id: 3,
        project_url: "https://githubfinder3465.netlify.app/",
        project_img: github_finder,
        project_name: "Github finder",
        project:
          "React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management and is part of the Modern React Front To Back Udemy course",
      },
    ],
  };

  render() {
    return (
      <div className="portfolio">
        <h2 className="portfolio-heading">{this.state.title}</h2>
        <div className="container" id="portfolio">
          {this.state.portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
