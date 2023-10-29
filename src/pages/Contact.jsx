import React,{useState} from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {

  const [message, setMessage] = useState({ name: "", email: "", subject: "",message:""})
    const contactMessage = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/contact/usermessage", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: message.name,
                email: message.email,
                subject: message.subject,
                message: message.message
            })
        });
        const data = await response.json();
        console.log(data);
        if (!data.success) {
            alert("Invalid Credentials.")
        }else{
          alert("Message Sent.")
        }
    }
    const changedata = (event) => {
        setMessage({ ...message, [event.target.name]: event.target.value })
    }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <b>Address :</b>
            <p>Dackevägen 33,, 177 34 Järfälla, Sweden,</p>
            <b>Mail at :</b>
            <p>uxkonsult@gmail.com</p>
          </div>
          <div className="col-md-8">
            <img src="../imges/homeimg4.jpg" alt="" className='img-fluid' height={150} />
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-10 shadow-lg p-3 mb-5 bg-white rounded">
            <h2 className='text-center text-primary mt-3'>Contact Us </h2>
            <div className='mt-3'>
              <input className='form-control mt-2' required="required" value={message.name} placeholder='name...' type="name" name="name" onChange={changedata}/>
              <input className='form-control mt-2' required="required" value={message.email} placeholder='email...' type="email" name="email" onChange={changedata}/>
              <input className='form-control mt-2' required="required" value={message.subject} placeholder='subject...' type="subject" name="subject" onChange={changedata}/>
              <textarea name="message" cols="30" rows="5" className='form-control' value={message.message} placeholder='message...' onChange={changedata}></textarea>
              
              <div className="btn btn-primary mt-3 text-light" onClick={contactMessage}>Send Message</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
