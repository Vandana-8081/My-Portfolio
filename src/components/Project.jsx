const Project=()=>{
    return(<>
    <section id="projects">
  <div className="container">
    <h6 className="text-center">
      <span className="btn btn-danger">
        What I've done?
      </span>
    </h6>
    <h2 className="section-heading text-center">Projects</h2>
    <div className="row justify-content-center mt-4 gy-4"
      data-aos="fade-up"
      data-aos-delay={200} >
      <div className="col-lg-4 col-md-6">
        <div className="card project-card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="col-2">
                <img
                  src="web.png" height="150px" width="150px"
                  className="img-fluid icon"
                  alt="PfpFinder Logo"
                />
              </div>
              <div className="col-7 p-0">
                <a
                  href="https://vandana8080.pythonanywhere.com/"
                  className="card-title title"
                  target="_blank"
                >
                  E-shop
                </a>
                <p className="stacks m-0">HTML | CSS | Django | SQL</p>
              </div>
              <div className="col-3 align-middle">
                <a
                  href="https://vandana8080.pythonanywhere.com/"
                  className="btn btn-sm primary-bg-btn rounded-5"
                  target="_blank"
                >
                  Visit <i className="bi bi-arrow-up-right-circle-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
              Find the best trending clothes to the E-shop website.
            </p>
          </div>
          <div className="banner-container">
            <div className="overlay">
              <a href="https://pfpfinder.com/" className="btn" target="_blank">
                <i className="bi bi-arrow-up-right-circle-fill" />
              </a>
            </div>
            <img
              src="web.png"
              className="card-img-top banner"
              alt="PfpFinder Banner"
            />
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="card project-card cursor-not-allowed">
          <div className="card-body ">
            <div className="d-flex align-items-center">
              <div className="col-2">
                <img
                  src="demo2.png"
                  className="img-fluid icon"
                  alt="SimplCalc Icon"
                />
              </div>
              <div className="col-7 p-0">
                <span className="card-title title">Portfolio</span>
                <p className="stacks m-0">HTML | CSS | JS | React</p>
              </div>
              <div className="col-3 align-middle">
                <button className="btn btn-sm in-progress cursor-not-allowed">
                  In Progress
                </button>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p className="description">
             I am working on my Portfolio website.
             
            </p>
          </div>
          <div className="banner-container cursor-not-allowed">
            <div className="overlay">
              <i className="bi bi-hourglass-split" />
            </div>
                        <img
              src="demo2.png"
              className="card-img-top banner"
              alt="PfpFinder Banner"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>);
}
 export default Project;