import React, { useState } from "react";
import { useNavigate } from "react-router";
import { _postApi } from "./Api";

export default function Reception() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    passwod: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const [data, setData] = useState('');
  const handleSubmit = () => {
    _postApi(
      '/api/users/login',
      form,
      (res) => {
        let user = res.role;

        localStorage.setItem('userdata', JSON.stringify(res.role));
        setData(res);
        if(user.role==='receptionist'){
          navigate('/dashboard')
        }else(
          navigate("/patient-table")
        )
      },
      (err) => {
        console.log(err);
      },
    );
  };
  let users = localStorage.getItem("userdata")
  const user = JSON.parse(users)
  return (
    <div>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <span onClick={()=>navigate('')}  className="text-decoration-none text-body pe-3">
                  <i className="bi bi-telephone me-2"></i>+234812 345 6789
                </span>
                <span className="text-body">|</span>
                <span onClick={()=>navigate('')}  className="text-decoration-none text-body px-3">
                  <i className="bi bi-envelope me-2"></i>KSPhealthcare.com
                </span>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <span onClick={()=>navigate('')}  className="text-body px-2">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span onClick={()=>navigate('')}  className="text-body px-2">
                  <i className="fab fa-twitter"></i>
                </span>
                <span onClick={()=>navigate('')}  className="text-body px-2">
                  <i className="fab fa-linkedin-in"></i>
                </span>
                <span onClick={()=>navigate('')}  className="text-body px-2">
                  <i className="fab fa-instagram"></i>
                </span>
                <span onClick={()=>navigate('')}  className="text-body ps-2">
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
            <span onClick={()=>navigate('/')} className="navbar-brand">
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
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <span onClick={()=>navigate('/')}   className="nav-item nav-link">
                    Home
                  </span>
                  <span onClick={()=>navigate('/admin')}   className="nav-item nav-link">
                    Admin
                  </span>
                  <span onClick={()=>navigate('/doctor')}  className="nav-item nav-link">
                    Doctor
                  </span>
                  <span onClick={()=>navigate('/reception')}   className="nav-item nav-link">
                    Recepition
                  </span>
                  <span onClick={()=>navigate('/contact')}   className="nav-item nav-link">
                    Contact
                  </span>
                  <span onClick={()=>navigate('/about')}   className="nav-item nav-link">
                    About
                  </span>
                  <span onClick={()=>navigate('/service')}   className="nav-item nav-link">
                    Service
                  </span>
                </div>
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
                  Recepition
                </h5>
              </div>
              <p className="mb-5">
                Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
                ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
                rebum sea invidunt voluptua. Eos vero eos vero ea et dolore
                eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores
                magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus
                sed.
              </p>
              <span onClick={()=>navigate('')}  className="btn btn-primary rounded-pill py-3 px-5 me-3">
                Find Doctor
              </span>
            </div>
            <div className="col-lg-6">
              <div className="bg-light text-center rounded p-5">
                <h1 className="mb-4">login details</h1>
                <div>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <div
                        className="date"
                        id="gmail"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="Gmail address"
                          data-target="#gmail"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="password"
                        data-target-input="nearest"
                      >
                        <input
                          type="password"
                          className="form-control bg-white border-0 datetimepicker-input"
                          placeholder="password"
                          data-target="#password"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        
                        onClick={()=> handleSubmit()}
                      >
                        login
                      </button>
                    </div>
                  </div>
                </div>
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
                <i className="fa fa-map-marker-alt text-primary me-3"></i>
                IBRAHIM TAYO ROAD
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3"></i>
                KSPhealthcare.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary me-3"></i>+234802 345
                67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Quick Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </span>
                <span onClick={()=>navigate('')}  className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Popular Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </span>
                <span onClick={()=>navigate('')}  className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </span>
                <span onClick={()=>navigate('')}  className="text-light" href="#">
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
      <span onClick={()=>navigate('')}  href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </span>
    </div>
  );
}
