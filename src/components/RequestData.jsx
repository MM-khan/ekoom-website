import React,{useState,useEffect} from 'react'

export default function RequestData() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/astimate/getallrequests",{
            mehtod:"GET"
        }).then((res)=>res.json())
            .then((request)=>{
                // console.log(request,"astimatedata");
                setData(request.data);
            });
    },[])
  return (
    <>
        {/* astimate requests */}

        <div className="container">
                <div className="row justify-content-center">
                    <h1 className='text-primary text-center'>Customer Requests</h1>
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile No</th>
                                    <th scope="col">Area</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {data && data.map((data,index)=>{
                                                console.log(data.name);
                                            return(
                                            <tr>
                                                <th scope='row'>{index+1}</th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.number}</td>
                                                <td>{data.area}</td>
                                            </tr>
                                            )
                                        })}
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </>
  )
}
