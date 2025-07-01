import React from 'react';
import '../css/my_work.css';
import { FaGithub } from 'react-icons/fa';

function MyWork() {
  return (
    <div data-spy="scroll" data-target="#rock-navigation">
      <section id="work" className="tm-padding-top-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10 text-center">
              <strong className="title">TrailOne</strong>
              <p className="trailone-description">
                TrailOne is a logistics management web application designed to streamline order tracking and client coordination for companies handling container shipments. Built with Django, it features a clean, user-friendly interface for managing shipment details, client information, and delivery statuses. TrailOne simplifies the logistics workflow, helping teams stay organized and efficient from dispatch to delivery.
              </p>
              <a 
                href="https://github.com/your-username/trailone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="trailone-btn">
                <FaGithub /> View on GitHub
              </a>
              <br></br>
              <div className='container'>
                <div className="col-md-offset-1 col-md-10 text-center">
                  <a href="/portfolio" className="trailone-btn">See my other works</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyWork;
