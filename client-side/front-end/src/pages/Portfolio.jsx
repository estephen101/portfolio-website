function Portfolio() {
    const projectDetails = {
        icon: './img/url',
        title:"ImageMatcher",
        description : "This project focuses on matching images to one another by using pixel density for comparison with the closest being the best match"
      }

        return(
            <>
            <h2>Portfolio</h2>
            <p>Here are some of the projects i have worked on :</p>

            
            <div className="projects">
              <div className="projectCard">
                <div className="projectIcon">{projectDetails.icon}</div>
                <div className="projectTitle"><h2>{projectDetails.title}</h2></div>
                <div className="projectDescription"> {projectDetails.description}</div>
              </div>

              <div className="projectCard">
                <div className="projectIcon">{projectDetails.icon}</div>
                <div className="projectTitle"><h2>{projectDetails.title}</h2></div>
                <div className="projectDescription"> {projectDetails.description}</div>
              </div>

              <div className="projectCard">
                <div className="projectIcon">{projectDetails.icon}</div>
                <div className="projectTitle"><h2>{projectDetails.title}</h2></div>
                <div className="projectDescription"> {projectDetails.description}</div>
              </div>

            </div>
            </>
        )
}

export default Portfolio;