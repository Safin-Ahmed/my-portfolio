import React from "react";
import { useParams } from "react-router";
import { products } from "../../data";
import "./Project.css";
const Project = () => {
  let params = useParams();
  const id = params.projectId;
  const singleProject = products.find((product) => product.id == id);
  console.log(singleProject);
  return (
    <div
      className="project-section"
      style={{ marginTop: "2rem", display: "flex", alignItems: "start" }}
    >
      <div className="project-container">
        <h1 className="title">{singleProject.title}</h1>
        <div className="project-details">
          <div className="project-mockups">
            <div className="mockup-1">
              <img src={singleProject.img} />
            </div>
            <div className="mockup-2">
              <img src={singleProject.img1} />
            </div>
            <div className="mockup-3">
              <img src={singleProject.img2} />
            </div>
          </div>
          <div className="project-features">
            <div className="single-feature">
              <p>{singleProject.ft1}</p>
            </div>

            <div className="single-feature">
              <p>{singleProject.ft2}</p>
            </div>
            <div className="single-feature">
              <p>{singleProject.ft3}</p>
            </div>
            <div className="single-feature">
              <p>{singleProject.ft4}</p>
            </div>
            <div className="single-feature">
              <p>{singleProject.ft5}</p>
            </div>
          </div>
        </div>
        <div className="actions">
          {singleProject.gitClient && (
            <a href={singleProject.gitClient} target="_blank">
              <button>Git Client Repo</button>
            </a>
          )}
          {singleProject.gitLink && (
            <a href={singleProject.gitLink} target="_blank">
              <button>Git Repo</button>
            </a>
          )}
          {
            <a href={singleProject.link} target="_blank">
              <button>View Live</button>
            </a>
          }
          {singleProject.gitServer && (
            <a href={singleProject.gitServer} target="_blank">
              <button>Git Server Repo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
