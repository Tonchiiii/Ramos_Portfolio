import React from 'react';
import '../css/style.css'; // Adjust path as needed for your CSS
import { FaHeart, FaBook } from 'react-icons/fa';

function MyWork() {
  return (
    <div data-spy="scroll" data-target="#rock-navigation">
      {/* START work */}
      <section id="work" className="tm-padding-top-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-11">
              <h2 className="title">My <strong>Work</strong></h2>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="work-wrapper">
                <FaHeart />
                <h3 className="text-uppercase tm-work-h3">ClickCare</h3>
                <hr />
                <p>
                  My project for Software Design, this website is a system wherein users can get an initial assessment
                  regarding their musculo-skeletal discomforts by answering an assessment form. Done using Django framework.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-6">
              <div className="work-wrapper">
                <FaBook />
                <h3 className="text-uppercase tm-work-h3">LPENHS NCAE Reviewer</h3>
                <hr />
                <p>
                  A webpage dedicated for the 3rd Year High School students of Las Pinas East National High School which
                  serves as a reviewer for the annual National Career Assessment Examination. Done using Django framework.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* END work */}
    </div>
  );
}

export default MyWork;
