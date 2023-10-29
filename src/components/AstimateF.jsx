import React,{useState} from 'react'

export default function AstimateF() {
    const [credantial, setCredantial] = useState({ name: "", email: "", number: "",area:""})
    const requestSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/astimate/request", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: credantial.name,
                email: credantial.email,
                number: credantial.number,
                area: credantial.area
            })
        });
        const data = await response.json();
        console.log(data);
        if (!data.success) {
            alert("Invalid Credentials.")
        }else{
            alert("your Request sent.")
        }
    }
    const onchange = (event) => {
        setCredantial({ ...credantial, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className="col-md-10 shadow-lg p-3 mb-5 bg-white rounded">
                        <h2 className='text-center text-primary mt-3'>Request An Astimate</h2>
                        <div className='mt-3'>
                            <input className='form-control mt-2' required="required" placeholder='name...' type="name" name="name" value={credantial.name} onChange={onchange} />
                            <input className='form-control mt-2' required="required" placeholder='email...' type="email" name="email" value={credantial.email} onChange={onchange}/>
                            <input className='form-control mt-2' required="required" placeholder='phone number...' type="number" name="number" value={credantial.number} onChange={onchange}/>
                            <input className='form-control mt-2' required="required" placeholder='renovation area...' type="text" name="area" value={credantial.area} onChange={onchange}/>
                            {/* <select className='form-control mt-2'name="area">
                                <option name="area" value={credantial.area}>GARDEN</option>
                                <option name="area" value={credantial.area}>FACILITY</option>
                                <option name="area" value={credantial.area}>BUILDING SERVICES</option>
                                <option name="area" value={credantial.area}>DRAINAGE</option>
                            </select> */}
                            <div className="btn btn-primary mt-3 text-light" onClick={requestSubmit}>Send Request</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
