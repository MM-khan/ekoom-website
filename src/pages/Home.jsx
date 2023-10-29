import React from 'react';
import Navbar from "../components/Navbar";
import Slider from "../components/Slider"
import Footer from '../components/Footer';
import Card from '../components/Cards';
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <h2>WELCOME - WE ARE HAPPY TO HELP!</h2>
            <p>We want to create a clean eco. For you, for us, for our world around us. We look after both you as a customer and your needs as well as the conditions for the assignment and the competence of our employees - in order to best create a qualitative end result with sustainability in mind. We envision a clean eco, in both large and small ways.</p>
          </div>
        </div>
        <div className="row my-3">
          <h3>Our Services</h3>
          {/* <div className="col">
            <div className="d-flex"> */}
              <div className="col-3">
                <Link to="/garden"><h5>GARDEN</h5></Link>
                <img src="../imges/links.png" alt="" className="img-fluid" />
              </div>
              <div className="col-3">
                <Link to="/facility"><h5>FACILITY</h5></Link>
                <img src="../imges/links.png" alt="" className="img-fluid" />
              </div>
              <div className="col-3">
                <Link to="/drainage"><h5>DRAINAGE</h5></Link>
                <img src="../imges/link2.png" alt="" className="img-fluid" />
              </div>
              <div className="col-3">
                <Link to="/building"><h5>BUILDING SERVICES</h5></Link>
                <img src="../imges/link3.png" alt="" className="img-fluid" />
              </div>
            </div>
          {/* </div>
        </div> */}
        <div className="row mt-3">
          <h3>Our Facilities</h3>
          <Card />
          <p>The company consists of an owner, administrative staff and an ever-growing number of employees. Together we work to create attractive services, both for customers and employees.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
