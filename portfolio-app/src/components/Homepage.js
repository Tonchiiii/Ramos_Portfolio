import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    return (
        <div className='body' data-spy="scroll" data-target="#rock-navigation">
            <section id="home" className="templatemo-home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-1"></div>
                        <div className="col-md-8 col-sm-10">
                            <h1 className="tm-home-title"><strong>Anton Gerard Ramos</strong></h1>
                            <h2 className="tm-home-subtitle">Technological Institute of the Philippines - Manila</h2>
                            <p>I'm a dedicated and passionate <strong>BS CpE</strong> student with a strong interest in <strong>Web Development</strong>. This portfolio showcases my skills, projects, and professional experiences, including my work with Django framework.</p>
                            <a href="/work" className="btn-default smoothScroll tm-view-more-btn">Let's Begin</a>
                        </div>
                        <div className="col-md-2 col-sm-1"></div>
                    </div>
                </div>
            </section>
            
            <section id="resume" className="tm-padding-top-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">					
                            <h2 className="title">My <strong>Profile</strong></h2>
                            <p><span className="tm-info-label">Name</span> Anton Gerard M. Ramos</p>
                            <p><span className="tm-info-label">Birthday</span> November 04, 1998</p>
                            <p><span className="tm-info-label">Address</span> Las Piñas City, Metro Manila</p>
                            <p><span className="tm-info-label">Phone</span> 0905-072-1747 </p>
                            <p><span className="tm-info-label">Email</span> magmramos@tip.edu.ph</p>
                            <p><span className="tm-info-label">Website</span> <a href="/" className="tm-red-text">www.company.com</a></p>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <h2 className="title"><strong>Some</strong> Skills</h2>
                            <h4 className="tm-progress-label">Python <small className="progress-percent-small">80%</small></h4>
                            <div className="progress tm-progress">
                                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '80%' }}></div>
                            </div>
                            <h4 className="tm-progress-label">HTML5 <small className="progress-percent-small">85%</small></h4>
                            <div className="progress tm-progress">
                                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '85%' }}></div>
                            </div>
                            <h4 className="tm-progress-label">Django <small className="progress-percent-small">75%</small></h4>
                            <div className="progress tm-progress">
                                <div className="progress-bar progress-bar-danger" role="progressbar" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
