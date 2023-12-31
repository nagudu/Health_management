import React from "react";
import { useNavigate } from "react-router";

export default function SingUp() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <span className="text-decoration-none text-body pe-3" href="">
                  <i className="bi bi-telephone me-2"></i>+234812 345 6789
                </span>
                <span className="text-body">|</span>
                <span className="text-decoration-none text-body px-3" href="">
                  <i className="bi bi-envelope me-2"></i>KSPhealthcare.com
                </span>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <span className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="text-body px-2" href="">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="text-body px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </span>
                <span className="text-body px-2" href="">
                  <i className="fab fa-instagram"></i>
                </span>
                <span className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <span onClick={()=>navigate("/")} className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <i className="fa fa-clinic-medical me-2"></i>HOSPITAL CARE
              </h1>
            </span>
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
                <span onClick={()=>navigate("/")}  className="nav-item nav-link">
                  Home
                </span>
                <span onClick={() => navigate("/singup")}  className="nav-item nav-link">
                  Card
                </span>
                <span onClick={() => navigate("/file")}  className="nav-item nav-link">
                  New file
                </span>
                {/* <span href="#" className="nav-item nav-link">
                  Audio Call
                </span>
                <span href="#" className="nav-item nav-link">
                  Vidoe Call
                </span> */}
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
                  Appointment
                </h5>
                <h1 className="display-4">Open a New file For Your Family</h1>
              </div>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam vero culpa harum autem iusto atque cumque soluta nulla
                accusamus. Soluta consequatur corrupti perferendis pariatur,
                numquam corporis magni sequi repudiandae quo maiores eos
                tempore. A quis rem cumque voluptate fugit tempore cum nemo,
                enim, harum delectus soluta exercitationem asperiores voluptatem
                repellat? Atque ratione dolor dicta quae officia assumenda
                tenetur temporibus at quidem, fugiat ducimus corrupti vitae sunt
                et non, libero ipsam quasi consequuntur animi facilis neque!
                Voluptatem mollitia perspiciatis dolores! Explicabo, in natus
                voluptatibus doloribus quisquam hic accusamus! Qui consequuntur
                corporis temporibus sed! Culpa soluta aut, modi porro molestiae
                recusandae rerum.
              </p>
              <span
                className="btn btn-primary rounded-pill py-3 px-5 me-3"
                href=""
              >
                Find Doctor
              </span>
            </div>
            <div className="col-lg-6">
              <div className="bg-light text-center rounded p-5">
                <h1 className="mb-4">Open a New File</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        placeholder="Frist Name"
                        required
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        placeholder="Middle Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-white border-0"
                        placeholder="Last Name"
                        required
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        placeholder="Your Email"
                        required
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-white border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Choose State</option>
                        <option value="1">Abuja</option>
                        <option value="2">Kano</option>
                        <option value="3">Gombe</option>
                      </select>
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
                      <div
                        className="date"
                        id="date"
                        data-target-input="nearest"
                      >
                        <input
                          type="number"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Date Of Birth"
                          data-target="#date"
                          data-toggle="datetimepicker"
                          required
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="time"
                        data-target-input="nearest"
                      >
                        <input
                          type="number"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Phone No"
                          data-target="#time"
                          data-toggle="datetimepicker"
                          required
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
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </span>
                <span className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Popular Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </span>
                <span className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </span>
                <span className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </span>
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
      <span href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </span>
    </div>
  );
}
