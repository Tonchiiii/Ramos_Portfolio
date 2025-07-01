import React from 'react';
import '../css/my_work.css';
import { FaGithub } from 'react-icons/fa';
import trailone from '../images/trailone.png'; // adjust the path as needed

function MyWork() {
  return (
    <section id="work" className="tm-padding-top-bottom-100">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center" data-aos="fade-up">
          <span>TrailOne</span>
          <h2>TrailOne</h2>
          <p>
            A logistics management system to streamline order tracking and delivery coordination
            for companies handling container shipments.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <p className="trailone-description text-start indented">
              TrailOne is a logistics management web application designed to streamline order tracking and client coordination
              for companies handling container shipments. Built with Django, it features a clean, user-friendly interface for
              managing shipment details, client information, and delivery statuses. TrailOne simplifies the logistics workflow,
              helping teams stay organized and efficient from dispatch to delivery.
            </p>

            <div className="d-flex flex-column align-items-center gap-2 mt-4">
              <a
                href="https://github.com/Tonchiiii/TrailOne.git"
                target="_blank"
                rel="noopener noreferrer"
                className="trailone-btn"
              >
                <FaGithub /> View on GitHub
              </a>

              <a href="#portfolio" className="trailone-btn">
                See my other works
              </a>
            </div>
          </div>

          {/* RIGHT: Image Column */}
          <div className="col-md-6 text-center">
            <img
              src={trailone}
              alt="TrailOne Preview"
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyWork;
