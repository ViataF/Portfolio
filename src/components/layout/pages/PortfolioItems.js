import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PortfolioItems = ({
  portfolio: { project_name, project, project_img, project_url },
}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={project_img} alt="project_img" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {project_name}
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href={project_url} alt="project link">
                Link to project
              </a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {project_name}
              <i className="material-icons right">close</i>
            </span>
            <p>{project}</p>
            <a href={project_url} alt="project link">
              Link to project
            </a>
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
