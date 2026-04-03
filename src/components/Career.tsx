import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduated in Software Engineering</h4>
                <h5>Virtual University of Pakistan</h5>
              </div>
              <h3>2020-2025</h3>
            </div>
            <p>
              Graduated in Software Engineering with a strong foundation in core subjects including Object-Oriented Programming, Data Structures, Software Design, Web Development, and Database Systems. Gained hands-on experience through academic projects, applying software engineering principles to build practical, real-world solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Development </h4>
                <h5>National University of Modern Languages</h5>
              </div>
              <h3>Sep-Dec 2025</h3>
            </div>
            <p>
              Assisted in developing REST APIs using Node.js. Worked on frontend features using React.js. Collaborated with team using Git for version control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
