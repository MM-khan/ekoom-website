import React from 'react';
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AstimateF from '../components/AstimateF';

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="container">
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
        <AstimateF />
      </div>
      <Footer />
    </>
  )
}
