const Skills=()=>{
    return(<>

    <section id="skills">
  <div className="container">
    <h6 className="text-center">
      <span className="btn btn-danger ">
        What do I know?
      </span>
    </h6>
    <h2 className="section-heading text-center">Skills</h2>
    <p className="text-center muted-text mt-3 mb-4">
      Here are some of the technologies that are part of my current stack:
    </p>
    <div
      className="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 skills-container"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="html.png"
            alt="HTML"
          />
          <p className="skill-name">HTML</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="css.png"
            alt="CSS"
          />
          <p className="skill-name">CSS</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="js.png"
            alt="JavaScript"
          />
          <p className="skill-name">JS</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="node.png"
            alt="NodeJS"
          />
          <p className="skill-name">NodeJS</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="express.png"
            alt="ExpressJS"
          />
          <p className="skill-name">ExpressJS</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="ejs.png"
            alt="EJS"
          />
          <p className="skill-name">EJS</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="boot.jpeg"
            alt="Bootstrap"
          />
          <p className="skill-name">Bootstrap</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="my.png"
            alt="C"
          />
          <p className="skill-name">Mysql</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="py.jpeg"
            alt="Python"
          />
          <p className="skill-name">Python</p>
        </div>
      </div>
      <div className="col">
        <div className="skill">
          <img
            className="skill-image"
            src="mongo.jpeg"
            alt="MongoDB"
          />
          <p className="skill-name">MongoDB</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    </>);
}

export default Skills;