import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Service() {
    const navigate = useNavigate()
  return (
    <div>
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <span onClick={() => navigate("/")} className="text-decoration-none text-body pe-3" href=""><i className="bi bi-telephone me-2"></i>+012 345 6789</span>
                        <span className="text-body">|</span>
                        <span onClick={() => navigate("/")} className="text-decoration-none text-body px-3" href=""><i className="bi bi-envelope me-2"></i>info@example.com</span>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <span onClick={() => navigate("/")} className="text-body px-2" href="">
                            <i className="fab fa-facebook-f"></i>
                        </span>
                        <span onClick={() => navigate("/")} className="text-body px-2" href="">
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span onClick={() => navigate("/")} className="text-body px-2" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                        <span onClick={() => navigate("/")} className="text-body px-2" href="">
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span onClick={() => navigate("/")} className="text-body ps-2" href="">
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
                <span onClick={() => navigate("/")} href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>HOSPITAL CARE</h1>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <span onClick={() => navigate("/")} href="index.html" className="nav-item nav-link">Home</span>
                        <span onClick={() => navigate("/")} href="admin.html" className="nav-item nav-link">Admin</span>
                        <span onClick={() => navigate("/")} href="./doctor.html" className="nav-item nav-link">Doctor</span>
                        <span onClick={() => navigate("/")} href="recepition.html" className="nav-item nav-link">Recepition</span>
                        <span onClick={() => navigate("/")} href="contact.html" className="nav-item nav-link">Contact</span>
                        <span onClick={() => navigate("/")} href="about.html" className="nav-item nav-link">About</span>
                        <span onClick={() => navigate("/")} href="service.html" className="nav-item nav-link">Service</span>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                <h1 className="display-4">Excellent Medical Services</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-user-md text-white"></i>
                        </div>
                        <h4 className="mb-3">Emergency Care</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                        <span onClick={() => navigate("/")} className="btn btn-lg btn-primary rounded-pill" href="">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-procedures text-white"></i>
                        </div>
                        <h4 className="mb-3">Operation & Surgery</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                        <span onClick={() => navigate("/")} className="btn btn-lg btn-primary rounded-pill" href="">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-stethoscope text-white"></i>
                        </div>
                        <h4 className="mb-3">Outdoor Checkup</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                        <span onClick={() => navigate("/")} className="btn btn-lg btn-primary rounded-pill" href="">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-ambulance text-white"></i>
                        </div>
                        <h4 className="mb-3">Ambulance Service</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                        <span onClick={() => navigate("/")} className="btn btn-lg btn-primary rounded-pill" href="">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-pills text-white"></i>
                        </div>
                        <h4 className="mb-3">Medicine & Pharmacy</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                        <span onClick={() => navigate("/")} className="btn btn-lg btn-primary rounded-pill" href="">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon mb-4">
                            <i className="fa fa-2x fa-microscope text-white"></i>
                        </div>
                        <h4 className="mb-3">Blood Testing</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                        <span onClick={() => navigate("/")} className="btn btn-lg btn-primary rounded-pill" href="">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>BELLO ROAD KANO</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>KSPhealthcare.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+234 812 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                        <span onClick={() => navigate("/")} className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                        <span onClick={() => navigate("/")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                        <span onClick={() => navigate("/")} className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
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
    <span onClick={() => navigate("/")} href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></span>

    </div>
  )
}
