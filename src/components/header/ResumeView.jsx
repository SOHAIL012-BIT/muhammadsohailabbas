import React from "react";


const ResumeView = () => {

  let resumeLink="https://drive.google.com/file/d/1nTSaW9-HIsNw8Wa65LEo-r7K0JzsC9S7/view?usp=sharing"
    return <div className="cta">
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
        <a href={resumeLink} download className="btn">Download Resume</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
  </div>;
};

export default ResumeView;
