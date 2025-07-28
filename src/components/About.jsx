const About = () => {
  return (
    <>
      {/* about section */}
      <section id="about">
        <div className="container">
          <h6 className="text-center">
            <span className="btn btn-danger ">But who am I?</span>
          </h6>
          <h2 className="section-heading text-center">About Me</h2>
          <p className="text-center muted-text mt-3 mb-4">
            My store in a nutshell
          </p>
          <div
            className="row justify-content-center"
            data-aos="fade-down"
            data-aos-delay={200}
          >
            <div className="col-lg-5 about-portrait">
              <img
                src="van5.jpg"
                className="img-fluid pic"
                alt="About Me Portrait"
                id="picText"
              />
            </div>
            <div className="col-lg-7">
              <p className="bio">
              <h3>          Hi there , welcome to my website! I'm Vandana passionate web
                developer who enjoys learning new technologies and solving problem with code!</h3>
                <br />
                <br />
                <h5>This website is my portfolio where I share web development projects that interest me and 
                inspire me.</h5>
                <br />
                <br />
               <h5>
                 Thank you for visiting my website and getting to kanow me better .
                I hope you enjoyed reading my work and found them useful and informative .
                if you want to read more about my project visit my github profile and read more about me,
               </h5>
                {" "}
                <a href="https://github.com/Vandana-8081" target="_blank">
                  Read more
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
