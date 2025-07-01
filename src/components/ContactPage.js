import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // You can later integrate EmailJS, Axios, or a backend POST here
  };

  return (
    <div>
      {/* START ABOUT */}
      <section id="about" className="tm-about">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-6 col-md-6 col-sm-offset-6 col-sm-7">
              <div className="about-title">
                <h2>This is</h2>
                <h1 className="tm-red-text"><strong>Me</strong></h1>
              </div>
              <p>
                I'm a dedicated and passionate BS CpE student with a strong interest in Web Development.
                This portfolio showcases my skills, projects, and professional experiences, including my work with Django framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* START SOCIAL */}
      <section id="social" className="tm-social">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 wow rotateInUpLeft" data-wow-delay="0.3s">
              <div className="media facebook">
                <a href="https://www.facebook.com/tonchiiiiiiii/">
                  <div className="media-object pull-left">
                    <i className="fa fa-facebook"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title">Follow me on</h4>
                    <h3>Facebook</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 wow rotateInUpLeft" data-wow-delay="0.6s">
              <div className="media linkedin">
                <a href="https://www.linkedin.com/in/anton-ramos-88b65926a/">
                  <div className="media-object pull-left">
                    <i className="fa fa-linkedin"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title">Tweet me on</h4>
                    <h3>LinkedIn</h3>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 wow rotateInUpLeft" data-wow-delay="0.9s">
              <div className="media instagram">
                <a href="/">
                  <div className="media-object pull-left">
                    <i className="fa fa-instagram"></i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading tm-social-title">Dm me on</h4>
                    <h3>Instagram</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START CONTACT */}
      <section id="contact" className="tm-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title">Drop <strong>me a line</strong></h2>
              <hr />
            </div>

            <div className="col-md-1 col-sm-1"></div>

            <div className="col-md-10 col-sm-10">
              <form onSubmit={handleSubmit}>
                <div className="col-md-6 col-sm-6">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12 col-sm-12">
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
                  <input
                    className="form-control"
                    type="submit"
                    value="SHOOT MESSAGE"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-1 col-sm-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
