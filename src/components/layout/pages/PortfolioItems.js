import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PortfolioItems = ({
  portfolio: { project_name, project, project_img, project_url, repo },
}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="card my_portfolio">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project_img} alt="project_img" />
          </div>
          <div className="card-content">
            <span className="card-title activator ">{project_name}</span>
            <section>
              <a
                target="_blank"
                href={project_url}
                className="section btn-small "
                alt="project link"
              >
                See project
              </a>
            </section>{" "}
            <section>
              <a href={repo} alt="project link" target="_blank">
                Github Repo
              </a>
            </section>
          </div>
          <div className="card-reveal">
            <span className="card-title ">
              {project_name}
              <i className="material-icons right">close</i>
            </span>
            <p>{project}</p>
            <section>
              <a
                href={project_url}
                className="btn-small"
                alt="project link"
                target="_blank"
              >
                Project
              </a>
            </section>
            <section>
              <a href={repo} target="_blank" alt="project link">
                Github Repo
              </a>
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PortfolioItems.propTypes = {
  portfolio: PropTypes.object.isRequired,
};

export default PortfolioItems;
