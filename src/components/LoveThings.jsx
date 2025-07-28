const LoveThings=()=>{
    return(<>
 {/* loving things */}
      <section id="things-i-love">
  <div className="container">
    <h6 className="text-center">
      <span className="btn btn-danger  ">Interests</span>
    </h6>
    <h2 className="section-heading text-center">Things I Love</h2>
    <div className="row justify-content-center pt-3 gy-4">
      <div className="col-lg-4 col-md-6" data-aos="fade-up">
        <div className="card">
          <div className="circle-container">
            <div className="circle">
              <i class="fa-solid fa-droplet"></i>
            </div>
          </div>
          <div className="card-body">
            <p className="card-title">Designing</p>
            <p className="card-text">
              I love designing. When I see something that needs improvement, I
              enjoy making it better visually. I pay attention to every detail,
              whether it's a graphic or a user interface. My goal is to create
              designs that catch the eye and inspire others.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up">
        <div className="card">
          <div className="circle-container">
            <div className="circle">
             <i class="fa-solid fa-code"></i>
            </div>
          </div>
          <div className="card-body">
            <p className="card-title">Developing</p>
            <p className="card-text">
              After designing, I dive into development. Coding is where I bring
              designs to life, turning concepts into digital experiences. Each
              line of code reflects my vision for functionality and elegance,
              showcasing my commitment to excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6" data-aos="fade-up">
        <div className="card">
          <div className="circle-container">
            <div className="circle">
             <i class="fa-solid fa-mug-hot"></i>
            </div>
          </div>
          <div className="card-body">
            <p className="card-title">Expanding</p>
            <p className="card-text">
              Expanding beyond creation, I optimize. From templates to full
              websites, I refine post-development. Leveraging blogging and basic
              SEO, I enhance visibility and impact online. Each step maximizes
              reach and effectiveness online.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </>)
}


export default LoveThings;