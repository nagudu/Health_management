import React from "react";

export default function Card() {
  return (
    <div>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href="">
                  <i className="bi bi-telephone me-2"></i>+234812 345 6789
                </a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href="">
                  <i className="bi bi-envelope me-2"></i>KSPhealthcare.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <i className="fa fa-clinic-medical me-2"></i>HOSPITAL CARE
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link">
                  Home
                </a>
                <a href="card.html" className="nav-item nav-link">
                  Card
                </a>
                <a href="file.html" className="nav-item nav-link">
                  New file
                </a>
                <a href="#" className="nav-item nav-link">
                  Audio Call
                </a>
                <a href="#" className="nav-item nav-link">
                  Vidoe Call
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  Out card
                </h5>
                <h1 className="display-4">Get an out patient card</h1>
              </div>
              <p className="mb-5">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                sed.
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 me-3"
                href=""
              >
                Find Doctor
              </a>
            </div>
            <div className="col-lg-6">
              <div className="bg-light text-center rounded p-5">
                <h1 className="mb-4">Get a card </h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        placeholder="Your Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        placeholder="Your Gmail"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        className="form-control bg-white border-0"
                        placeholder="phone No"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        placeholder="Address"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-white border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Gender</option>
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-white border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>state..</option>
                        <option value="1">Abuja</option>
                        <option value="2">Kano</option>
                        <option value="3">Gombe</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="date"
                        id="date"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Date"
                          data-target="#date"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="date of birth"
                        data-target-input="nearest"
                      >
                        <input
                          type="number"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Date of birth"
                          data-target="#time"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Get In Touch
              </h4>
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary me-3"></i>123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3"></i>
                info@example.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary me-3"></i>+012 345
                67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Quick Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </a>
                <a className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Popular Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </a>
                <a className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Newsletter
              </h4>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    placeholder="Your Email Address"
                  />
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">&copy; All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}