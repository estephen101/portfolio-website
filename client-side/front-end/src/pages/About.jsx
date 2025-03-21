  function About(params) {
     const educationDetails = {
      institution: "some institution",
      qualification: "Bachelors Degree",
      year : "set to current year"
     }

     const workExperience ={
      workplace: "Safaricom",
      yos: {current}

     }

    return(
        <div className="about">
          <div className="intro">
                <h3> LIAM</h3>
                  <p>hello i am  software working on big tech projects obtained via working at sanlam.
                  i am currently working on making at least one commit daily to improve my overall performance and problem solving skills.</p>
          </div>
          
          <div className="educationCard">
            <h2>EDUCATION</h2>
            <div className="someInstitution">
              <h3>{educationDetails.institution}</h3>
              <p>{educationDetails.qualification}</p>
              <h4>{educationDetails.year}</h4>
            </div>

            <div className="someInstitution">
              <h3>{educationDetails.institution}</h3>
              <p>{educationDetails.qualification}</p>
              <h4>{educationDetails.year}</h4>
            </div>
          </div>

          <div className="experienceCard">
            <h2>EXPERIENCE</h2>
            

          </div>
        </div>
    )
  }

  export default About;