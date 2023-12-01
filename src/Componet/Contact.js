import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
  return (
    <div>
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <span onClick={() => navigate("/contact")} className="text-decoration-none text-body pe-3" ><i className="bi bi-telephone me-2"></i>+012 345 6789</span>
                        <span className="text-body">|</span>
                        <span onClick={() => navigate("/contact")} className="text-decoration-none text-body px-3" ><i className="bi bi-envelope me-2"></i>info@example.com</span>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <span onClick={() => navigate("/contact")} className="text-body px-2" >
                            <i className="fab fa-facebook-f"></i>
                        </span>
                        <span onClick={() => navigate("/contact")} className="text-body px-2" >
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span onClick={() => navigate("/contact")} className="text-body px-2" >
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                        <span onClick={() => navigate("/contact")} className="text-body px-2" >
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span onClick={() => navigate("/contact")} className="text-body ps-2" >
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
                <span onClick={() => navigate("/contact")} href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>HOSPITAL CARE</h1>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <span onClick={() => navigate("/contact")} href="index.html" className="nav-item nav-link">Home</span>
                        <span onClick={() => navigate("/contact")} href="admin.html" className="nav-item nav-link">Admin</span>
                        <span onClick={() => navigate("/contact")} href="./doctor.html" className="nav-item nav-link">Doctor</span>
                        <span onClick={() => navigate("/contact")} href="recepition.html" className="nav-item nav-link">Recepition</span>
                        <span onClick={() => navigate("/contact")} href="contact.html" className="nav-item nav-link">Contact</span>
                        <span onClick={() => navigate("/contact")} href="about.html" className="nav-item nav-link">About</span>
                        <span onClick={() => navigate("/contact")} href="service.html" className="nav-item nav-link">Service</span>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
                <h1 className="display-4">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-5 mb-5">
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: "100px", height: "70px", transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-location-arrow text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">BELLO ROAD KANO</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: "100px", height: "70px", transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-phone text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">+234 812 345 6789</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: "200px"}}>
                        <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: "100px", height: "70px", transform: "rotate(-15deg)"}}>
                            <i className="fa fa-2x fa-envelope-open text-white" style={{transform: "rotate(15deg)"}}></i>
                        </div>
                        <h6 className="mb-0">KSPhealthcare.com</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{height: "500px"}}>
                    <div className="position-relative h-100">
                        <iframe className="position-relative w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameborder="0" style={{border:0}}  allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center position-relative" style={{marginTop: "-200px", zIndex: 1}}>
                <div className="col-lg-8">
                    <div className="bg-white rounded p-5 m-5 mb-0">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: "55px"}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: "55px"}} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Subject" style={{height: "55px"}} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
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
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>BELLO ROAD KANO</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>KSPhealthcare.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+234 812 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                        <span onClick={() => navigate("/contact")} className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                        <span onClick={() => navigate("/contact")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                        <span onClick={() => navigate("/contact")} className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</span>
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
    <span onClick={() => navigate("/contact")} href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></span>


    </div>
  )
}
