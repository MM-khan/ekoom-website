import { useState } from "react";
import galleryImg from "../ImgesPath.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
    const [imgs, setImgs] = useState(galleryImg);

    const showImages = (type) => {
        let images = galleryImg.filter(gImg => {
            return gImg.category === type

        })
        setImgs(images)
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary mx-2" onClick={() => setImgs(galleryImg)}>All</button>

                        <button className="btn btn-primary mx-2" onClick={() => showImages('garden')}>GARDEN</button>
                        <button className="btn btn-primary mx-2" onClick={() => showImages('facility')}>FACILITY</button>
                        <button className="btn btn-primary mx-2" onClick={() => showImages('drainage')}>DRAINAGE</button>
                        <button className="btn btn-primary mx-2" onClick={() => showImages('building')}>BUILDINGS</button>
                    </div>
                </div>
            </div>
            <div className="container" style=
                {{ marginTop: '20px', marginBottom: '10px', fontSize: "25px" }}>
                <div className="row">
                    {
                        imgs.map((pic) => {

                            return (
                                <>
                                    <div className="col-6 col-md-3 my-2">
                                        <img src={pic.img} alt="" style={{ height: "200px", width: "100%" }} />
                                    </div>
                                </>
                            )
                        })

                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
