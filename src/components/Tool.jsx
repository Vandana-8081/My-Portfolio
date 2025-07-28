const Tool=()=>{
    return(<>

    <section id="tools">
  <div className="container">
    <h6 className="text-center">
      <span className="btn btn-danger ">What I uses?</span>
    </h6>
    <h2 className="section-heading text-center">Tools</h2>
    <p className="text-center muted-text mt-3 mb-4">
      Tech stack known? Here are tools that I runs:
    </p>
    <div
      className="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 tools-container"
      data-aos="fade-down"
      data-aos-delay={200}
    >
      <div className="col">
        <div className="tool">
          <img
            className="tool-image"
            src="vs.jpeg"
            alt="VSCode"
          />
          <p className="tool-name">VSCode</p>
        </div>
      </div>
      <div className="col">
        <div className="tool">
          <img
            className="tool-image"
            src="github.jpeg"
            alt="Github"
          />
          <p className="tool-name">Github</p>
        </div>
      </div>
      <div className="col">
        <div className="tool">
          <img
            className="tool-image"
            src="canva.png"
            alt="Canva"
          />
          <p className="tool-name">Canva</p>
        </div>
      </div>
      <div className="col">
        <div className="tool">
          <img
            className="tool-image"
            src="pycham.jpeg"
            alt="pycharm"
          />
          <p className="tool-name">Pycharm</p>
        </div>
      </div>
      <div className="col">
        <div className="tool">
          <img
            className="tool-image"
            src="chat.png"
            alt="ChatGPT"
          />
          <p className="tool-name">ChatGPT</p>
        </div>
      </div>
      <div className="col">
        <div className="tool">
          <img
            className="tool-image"
            src="ssms.jpeg"
            alt="Gemini"
          />
          <p className="tool-name">SSMS</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>);
}

export default Tool;