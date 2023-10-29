import React from 'react'

export default function Cards() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-3 m-1 card shadow p-3 mb-5 bg-white rounded" style={{width: '17rem'}}>
                        <img  className="img-fluid rounded" src="../imges/serviceimg.jpg" alt="facilities" style={{height:230}} />
                    </div>
                    <div className="col-md-3 m-1 card shadow p-3 mb-5 bg-white rounded" style={{width: '17rem'}}>
                        <img className="img-fluid rounded" src="../imges/serviceimg2.jpg" alt="facilities" style={{height:230}} />
                    </div>
                    <div className="col-md-3 m-1 card shadow p-3 mb-5 bg-white rounded" style={{width: '17rem'}}>
                        <img className="img-fluid rounded" src="../imges/service3.jpg" alt="facilities" style={{height:230}} />
                    </div>
                    <div className="col-md-3 m-1 card shadow p-3 mb-5 bg-white rounded" style={{width: '17rem'}}>
                        <img className="img-fluid rounded" src="../imges/service4.jpg" alt="facilities" style={{height:230}} />
                    </div>
                </div>
            </div>
        </>
    )
}
