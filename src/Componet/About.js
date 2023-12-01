import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
  return (
    <div>
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <span onClick={() => navigate("/about")} className="text-decoration-none text-body pe-3" href=""><i className="bi bi-telephone me-2"></i>+012 345 6789</span>
                        <span className="text-body">|</span>
                        <span onClick={() => navigate("/about")} className="text-decoration-none text-body px-3" href=""><i className="bi bi-envelope me-2"></i>info@example.com</span>
                    </div>
                </div>
                <div className="col-md-6 text-center text-lg-end">
                    <div className="d-inline-flex align-items-center">
                        <span onClick={() => navigate("/about")} className="text-body px-2" href="">
                            <i className="fab fa-facebook-f"></i>
                        </span>
                        <span onClick={() => navigate("/about")} className="text-body px-2" href="">
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span onClick={() => navigate("/about")} className="text-body px-2" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </span>
                        <span onClick={() => navigate("/about")} className="text-body px-2" href="">
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span onClick={() => navigate("/about")} className="text-body ps-2" href="">
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
                <span onClick={() => navigate("/about")} href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>HOSPITAL CARE</h1>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <span onClick={() => navigate("/about")} href="index.html" className="nav-item nav-link">Home</span>
                        <span onClick={() => navigate("/about")} href="admin.html" className="nav-item nav-link">Admin</span>
                        <span onClick={() => navigate("/about")} href="./doctor.html" className="nav-item nav-link">Doctor</span>
                        <span onClick={() => navigate("/about")} href="recepition.html" className="nav-item nav-link">Recepition</span>
                        <span onClick={() => navigate("/about")} href="contact.html" className="nav-item nav-link">Contact</span>
                        <span onClick={() => navigate("/about")} href="about.html" className="nav-item nav-link">About</span>
                        <span onClick={() => navigate("/about")} href="service.html" className="nav-item nav-link">Service</span>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={require("./img/about.jpg")} style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                        <h1 className="display-4">Best Medical Care For Yourself and Your Family</h1>
                    </div>
                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                    <div className="row g-3 pt-3">
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                <h5 className="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
            </div>
            <div className="mx-auto" style={{width: "100%", maxWidth: "600px"}}>
                <div className="input-group">
                    <select className="form-select border-primary w-25" style={{height: "60px"}}>
                        <option selected>Department</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                    </select>
                    <input type="text" className="form-control border-primary w-50" placeholder="Keyword" />
                    <button className="btn btn-dark border-0 w-25">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "500px"}}>
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                <h1 className="display-4">Qualified Healthcare Professionals</h1>
            </div>
            <div className="owl-carousel team-carousel position-relative">
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src={require("./img/team-1.jpg")} style={{objectFit: "cover"}} />
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></span>
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></span>
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src={require("./img/team-2.jpg")} style={{objectFit: "cover"}} />
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></span>
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></span>
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <div className="row g-0 bg-light rounded overflow-hidden">
                        <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src={require("./img/team-3.jpg")} style={{objectFit: "cover"}} />
                        </div>
                        <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                                <h3>Doctor Name</h3>
                                <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter"></i></span>
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f"></i></span>
                                <span onClick={() => navigate("/about")} className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></span>
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
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                    <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                        <span onClick={() => navigate("/about")} className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Home</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>About Us</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Our Services</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Meet The Team</span>
                        <span onClick={() => navigate("/about")} className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Latest Blog</span>
                        <span onClick={() => navigate("/about")} className="text-light" href="#"><i className="fa fa-angle-right me-2"></i>Contact Us</span>
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
    <span onClick={() => navigate("/about")} href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></span>

    </div>
  )
}
