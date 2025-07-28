const Home=()=> {
  return (
    <>
     <section id="hero">
        <div className="container">
          <div className="row about-content">
            <div className="col-lg-5 order-lg-2">
        
            </div>
            <div className="img"><img src="/van5.jpg" alt="" /></div>
            <div className="col-lg-7 order-lg-1 hero-content" id="van">
              <span className="h3" data-aos="fade-up" data-aos-delay={0}>
                Hello 👋, I am
              </span>
              <h1 className="name" data-aos="fade-up" data-aos-delay={200}>
                <span>Vandana</span>
              </h1>
              <button
                type="button"
                className="btn btn-sm mt-3 mb-3 btn-showcase"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-stars" />Mern Stack developer
              </button>
              <p
                className="tagline mb-3"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                I'm a <span className="underline">MERN STACK </span>developer who 
                loves to create beautiful and functional website for people
                who want to make a difference in the World.<br/>
                Currently I'm a student of <span className="underline">AKTU University</span> ,where I'm pursuing my bachelar's Degree in computer science 
                & engineering, And learning how to create beautiful and function website using HTML, CSS,JvaaScript and React.
              </p>
              <div className="social-icons pb-2 pt-2 mb-2">
                <a
                  href="https://github.com/Vandana-8081"
                  target="_blank"
                  className="github"
                  data-aos="fade-up"
                  data-aos-delay={620}>
                 <i class="fa-brands fa-square-github"></i>
                </a>

                <a href="https://www.instagram.com/6793vandana/"
                  target="_blank"
                  className="tagramins"
                  data-aos="fade-up"
                  data-aos-delay={660} >
                  <i id="instaicon" class="fa-brands fa-square-instagram"></i>
                </a>
               
                <a
                  href="https://www.linkedin.com/in/vandana-098181330/"
                  target="_blank"
                  className="linkedin"
                  data-aos="fade-up"
                  data-aos-delay={690}
                >
                 <i class="fa-brands fa-linkedin"></i>
                </a>
                
              </div>
              <div className="d-flex call-to-action">
                <a href="#contact" data-aos="fade-up" data-aos-delay={700}>
                  <button type="button" className="btn me-4 secondary-bg-btn">
                    <i className="bi bi-envelope" /> Contact Me
                  </button>
                </a>
                <a href="#projects" data-aos="fade-up" data-aos-delay={800}>
                  <button
                    type="button"
                    className="btn btn-light secondary-bg-btn"
                  >
                    View Portfolio <i className="bi bi-arrow-up-right-circle" />
                  </button>
                </a>
              </div>
            </div>
         
          </div>
        </div>
      </section>


    </>
  );
};
export default Home;
