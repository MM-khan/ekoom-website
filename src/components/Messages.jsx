import React, { useEffect,useState } from 'react'

export default function Messages() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/contact/getalldata",{
            mehtod:"GET"
        }).then((res)=>res.json())
            .then((data)=>{
                console.log(data,"userData");
                setData(data.data);
            });
    },[]);
  return (
    <>
        <div className="container">
                {/* <div className="row"> */}
                    <h1 className='text-primary text-center'>Customer Messages</h1>
                    {/* <div className="col-md-12"> */}
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {data && data.map((user,index)=>{
                                            return(
                                            <tr>
                                                <th scope='row'>{index+1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.subject}</td>
                                                <td>{user.message}</td>
                                            </tr>
                                            )
                                        })}
                                </tbody>
                        </table>
                    {/* </div>
                </div> */}
            </div>
    </>
  )
}
