import React from 'react';
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <>
        <div className="container-fluid shadow p-3 mt-3 bg-white rounded">
            <div className="row">
                <div className="col-md-4">
                    <h2>Contact Us</h2>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">uxkonsult@gmail.com</a><br />
                    <a href="/">0737055649</a><br />
                    <a href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&ll=54.444492000000025%2C17.40234400000002&spn=8.952458%2C8.789062&z=5&source=embed&mid=17lnA6yoc0NwcBHlg3kQYvGnKuNU">Dackevägen 33,, 177 34 Järfälla, Sweden,</a>
                </div>
                <div className="col-md-4">
                    <h2>Useful Links</h2>
                    <Link to="/about">About Us</Link><br />
                    <Link to="/contact">Contact Us</Link><br />
                    <Link to ="/services">Our Services</Link>
                </div>
                <div className="col-md-4">
                    <h2>Follow Us</h2>
                    <p>Social media links put in here</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    <p>Copyright © <a href="/">Ekoom</a> 2023. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </>
  )
}
