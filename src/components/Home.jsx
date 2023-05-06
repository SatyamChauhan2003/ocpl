import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import Footer from "./Footer";
import Work from "./Work";
import Lottie from "lottie-react";
import earth from "./earth.json";

const Home = () => {
  return (
    <>
      <div style={{ width: "108%" }}>
        <Navbar
          expand="md"
          style={{ backgroundImage: `url("stars.jpg")`, objectFit: "contain" }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <Container className="flex justify-between items-center ">
            <div>
              <Navbar.Brand href="/">
                <img src="ocpl.webp" alt="OCPL LOGO" className="w-32 h-24 " />
              </Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className=" bg-white"
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="font-bold text-xl ">
                  <Nav.Link href="/about" className="text-white">
                    About
                  </Nav.Link>
                  <Nav.Link href="/work" className="text-white">
                    Work
                  </Nav.Link>
                  <Nav.Link href="/portfolio" className="text-white">
                    Portfolio
                  </Nav.Link>
                  <Nav.Link href="/contact" className="text-white">
                    Contact
                  </Nav.Link>
                  <Nav.Link href="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        <section
          className="relative  h-screen mx-auto scrollDown bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('stars.jpg')" }}
        >
          <div className="absolute inset-0 top-[20px]  max-w-7xl mx-auto sm:px-16 px-5 flex flex-row items-start gap-5">
            <div>
              <h1 className="font-black  lg:text-[70px] sm:text-[40px] xs:text-[50px] text-[50px] lg:leading-[98px] mt-2  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 headMargin">
                Cresco Together!
                <span class="text-[#8FE3CF]"></span>
              </h1>
              <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100 hero-text">
                "Web 3.0 Unlocked: Embrace the Power of Digital Opulence."
                <span className="blue-text-gradient"></span>
              </p>
            </div>
          </div>
          <div style={{position: "relative", width: "100%", height: "100%"}}>
            <div style={{width: "100%", height: "100%"}}>
              <div
                className=" w-2/4 h-60"
                style={{position:"absolute", left:"26%", top:"33%"}}
              >
              <Lottie loop={true} animationData={earth} />
              </div>
              
            </div>
          </div>
        </section>
        <Work />
       
        <div className="bg-gray-900">
          <section className="sm:px-16 sm:py-16  max-w-7xl mx-auto relative z-0 ">
            <span className="hash-span" id>
              &nbsp;
            </span>
            <div className=" bg-black-200 rounded-[20px] bg-gray-600 testimonial">
              <div className="bg-tertiary rounded-2xl sm:px-16 px-5 sm:py-16 min-h-[300px] ">
                <div style={{ opacity: "1", transform: "none" }}>
                  <p className="md:text-[18px] text-[14px] text-dark font-bold uppercase tracking-wider">
                    What others say
                  </p>
                  <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Testimonials.
                  </h2>
                </div>
              </div>
              <div className=" pb-14 sm:px-16 px-5 grid lg:grid-cols-3 grid-cols-2 gap-3">
                
                <div
                  className="bg-gray-800 px-5  rounded-3xl xs:w-[320px]  w-full m-auto mx-1"
                  style={{ opacity: "1", transform: "none",paddingTop:"40px", paddingBottom:"35px" }}
                >
                  <p className="text-white font-black text-[48px]">"</p>
                  <div className="mt-1">
                    <p className="text-white tracking-wider text-[18px] py-4 md:my-2">
                      "I've never met a team like OCPL has who truly cares about
                      their clients' success."
                    </p>
                    <div className="mt-7 flex justify-between items-center gap-1">
                      <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                          <span className="blue-text-gradient">@</span>
                          Naveen Kapoor
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                          COO of A&J Courier
                        </p>
                      </div>
                      <img
                        src="naveen.jpg"
                        alt="feedback_by-Naveen Kapoor"
                        className="w-10 h-10 rounded-full object-cover"
                      ></img>
                    </div>
                  </div>
                </div>
                
                <div
                  className="bg-gray-800 px-5  rounded-3xl xs:w-[320px]  w-full m-auto mx-1"
                  style={{ opacity: "1", transform: "none",paddingTop:"40px", paddingBottom:"35px" }}
                >
                  <p className="text-white font-black text-[48px]">"</p>
                  <div className="mt-1">
                    <p className="text-white tracking-wider text-[18px] py-4 md:my-2">
                      "I've never met a team like OCPL has who truly cares about
                      their clients' success."
                    </p>
                    <div className="mt-7 flex justify-between items-center gap-1">
                      <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                          <span className="blue-text-gradient">@</span>
                          Naveen Kapoor
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                          COO of A&J Courier
                        </p>
                      </div>
                      <img
                        src="naveen.jpg"
                        alt="feedback_by-Naveen Kapoor"
                        className="w-10 h-10 rounded-full object-cover"
                      ></img>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-gray-800  py-16 px-10 rounded-3xl xs:w-[320px] hidden lg:block w-full m-auto"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <p className="text-white font-black text-[48px]">"</p>
                  <div className="mt-0">
                    <p className="text-white tracking-wider text-[18px]">
                      "After they optimized our website, our traffic increased
                      by 50%. We can't thank them enough!"
                    </p>
                    <div className="mt-7 flex justify-between items-center gap-1">
                      <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                          <span className="text-blue">@</span>
                          Anand Prabhu
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                          CFO of 456 Enterprises
                        </p>
                      </div>
                      <img
                        src="anand.jpg"
                        alt="feedback_by-Anand Prabhu"
                        className="w-10 h-10 rounded-full object-cover"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
