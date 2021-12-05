import React from 'react';
import { useParams } from 'react-router';
import { products } from '../../data';
import Resume from '../Resume/Resume';
import './Project.css';
const Project = () => {
    let params = useParams();
    const id = params.projectId;
    const singleProject = products.find(product => product.id == id);
    console.log(singleProject);
    return (
        <div className="project-section" style={{ marginTop: '200px', display: 'flex', alignItems: 'start' }}>
            <Resume />
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
                    {singleProject.gitClient && <button><a href={singleProject.gitClient} target="_blank"></a>Git Client Repo</button>}
                    {singleProject.gitLink && <button><a href={singleProject.gitLink} target="_blank"></a>Git Repo</button>}
                    {<button><a href={singleProject.link} target="_blank"></a>View Live</button>}
                    {singleProject.gitServer && <button><a href={singleProject.gitServer} target="_blank"></a>Git Server Repo</button>}

                </div>
            </div>
        </div>
    );
};

export default Project;