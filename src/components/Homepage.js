import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div className="body" data-spy="scroll" data-target="#rock-navigation">
      {/* HERO / INTRO SECTION */}
      <section id="home" className="templatemo-home">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-1"></div>
            <div className="col-md-8 col-sm-10">
              <h1 className="tm-home-title"><strong>Anton Gerard Ramos</strong></h1>
              <h2 className="tm-home-subtitle">Technological Institute of the Philippines - Manila</h2>
              <p>
                I'm a dedicated and passionate <strong>BS CpE</strong> student with a strong interest in <strong>Web Development</strong>.
                This portfolio showcases my skills, projects, and professional experiences, including my work with Django framework.
              </p>
              <a href="#work" className="btn-default smoothScroll tm-view-more-btn">Let's Begin</a>
            </div>
            <div className="col-md-2 col-sm-1"></div>
          </div>
        </div>
      </section>

      {/* RESUME / PROFILE & SKILLS */}
      <section id="resume" className="tm-padding-top-bottom-100">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE: My Profile */}
            <div className="col-md-6 col-sm-6">
              <div className="section-title" data-aos="fade-up">
                <span>My Profile</span>
                <h2>My Profile</h2>
              </div>
              <p><span className="tm-info-label">Name</span> Anton Gerard M. Ramos</p>
              <p><span className="tm-info-label">Birthday</span> November 04, 1998</p>
              <p><span className="tm-info-label">Address</span> Las Piñas City, Metro Manila</p>
              <p><span className="tm-info-label">Phone</span> 0905-072-1747 </p>
              <p><span className="tm-info-label">Email</span> magmramos@tip.edu.ph</p>
              <p><span className="tm-info-label">Website</span> <a href="https://github.com/Tonchiiii" target="_blank" rel="noopener noreferrer" className="tm-red-text">https://github.com/Tonchiiii</a></p>
            </div>

            {/* RIGHT SIDE: Some Skills */}
            <div className="col-md-6 col-sm-6">
              <div className="section-title" data-aos="fade-up">
                <span>Some Skills</span>
                <h2>Some Skills</h2>
              </div>
              <h4 className="tm-progress-label">Python<small className="progress-percent-small">75%</small></h4>
              <div className="progress tm-progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '75%' }}></div>
              </div>

              <h4 className="tm-progress-label">React.js<small className="progress-percent-small">65%</small></h4>
              <div className="progress tm-progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '65%' }}></div>
              </div>

              <h4 className="tm-progress-label">Django<small className="progress-percent-small">80%</small></h4>
              <div className="progress tm-progress">
                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
