import React from 'react'

export default function Slider() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div id="ekoomImgs" className="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ul className="carousel-indicators">
                            <li data-target="#ekoomImgs" data-slide-to="0" className="active"></li>
                            <li data-target="#ekoomImgs" data-slide-to="1"></li>
                            <li data-target="#ekoomImgs" data-slide-to="2"></li>
                            <li data-target="#ekoomImgs" data-slide-to="3"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../imges/homeimg.jpg" alt="" style={{height:450}} className="img-fluid w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="../imges/homeimg2.jpg" alt="" style={{height:450}} className="img-fluid w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="../imges/homeimg3.jpg" alt="" style={{height:450}} className="img-fluid w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="../imges/homeimg4.jpg" alt="" style={{height:450}} className="img-fluid w-100" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#ekoomImgs" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#ekoomImgs" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
