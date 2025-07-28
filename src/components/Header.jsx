const Header=()=>{
    return(<>
{/* header components */}
 <div id="preloader"></div>
 <header id="header">
  <nav id="navbar" className="navbar navbar-expand-md">
    <div className="container" >
      <a href="/" className="navbar-brand logo">
       
        <span className="logo-name">My Portfolio</span>

      </a>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarMenu"
      >
        <div className="offcanvas-header">
          <a
            href="/"
            className="offcanvas-title navbar-brand logo"
            id="offcanvasNavbarMenu"
            data-aos="fade-down"
            data-aos-delay={600}
          >

          </a>
          {/* <button
            type="button"
            className="navbar-toggler"
            data-bs-dismiss="offcanvas"
            aria-label="Close Navigation Menu"
          >
            <i className="bi bi-x toggle-icon" />
          </button> */}
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav nav-underline justify-content-end flex-grow-1">
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay={500}
              data-bs-dismiss="offcanvas"
            >
              <a href="#hero" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay={600}
              data-bs-dismiss="offcanvas"
            >
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay={700}
              data-bs-dismiss="offcanvas"
            >
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay={800}
              data-bs-dismiss="offcanvas"
            >
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay={1000}
              data-bs-dismiss="offcanvas"
            >
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button
        className="btn border-0"
        id="switchTheme"
        data-aos="fade-down"
        data-aos-delay={600}
      >
      <i className="bi bi-brightness-high-fill" />
      </button>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle Navigation Menu"
        data-aos="fade-down"
        data-aos-delay={600}
      >
        <i className="bi bi-list toggle-icon" />
      </button>
    </div>
  </nav>
</header>



    </>)
}

export default Header;