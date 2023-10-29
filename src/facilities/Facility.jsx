import React from 'react';
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import facImg from "./facilityimg.json";
import AstimateF from '../components/AstimateF';

export default function Facility() {
  return (
    <>
        <Navbar />
        <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="mx-5 mb-5">
                            <h5>FACILITY</h5>
                            <img src="../imges/links.png" alt="" />
                        </div>
                    </div>
                    {/* <div className="col-md-9">
                        <div className="d-flex"> */}
                        <div className="col-3">
                        <Link to="/garden"><h6>GARDEN</h6></Link>
                            <img src="../imges/links.png" alt="" width={100} />
                        </div>
                        <div className="col-3">
                        <Link to="/drainage"><h6>DRAINAGE</h6></Link>
                            <img src="../imges/link2.png" alt="" width={100}/>
                        </div>
                        <div className="col-3">
                        <Link to="/building"><h6>BUILDING SERVICES</h6></Link>
                            <img src="../imges/link3.png" alt="" width={100} />
                        </div>
                        </div>
                        <p className='pt-3'>Single operations or recurring maintenance. We do everything in gardening in high and low season with committed employees at private as well as company/organization and brf. Try us! We help with, among other things:</p>
                        <b>Gardening & Maintenance ♦ Landscaping ♦ Park cleaning ♦ Winter maintenance ♦ Transport</b>
                    {/* </div>
                </div> */}
                <div className="row mt-5">
                    {facImg.map(image=>{
                        // console.log(image.img);
                        return(
                            <>
                                <div className="col-6 col-md-4 my-2">
                                    <img src={image.img} alt="" style={{ height:"200px" , width:"100%"}} className='img-fluid'/>
                                </div>
                            </>
                        )
                    })}
                </div>
                <AstimateF />
            </div>
        <Footer />
    </>
  )
}
