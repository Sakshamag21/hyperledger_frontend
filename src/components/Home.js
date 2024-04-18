import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'




const Home = (props) => {
    var searchData = props.myprop
    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);
    

    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

    const getdata = async () => {

        // const res = await fetch("/getdata", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // const data = await res.json();
        // console.log(data);
        // if (res.status === 422 || !data) {
        //     console.log("error ");
        // } else {
        //     setUserdata(data)
        //     console.log("get data");
        // }
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        // setUserData(jsonData);
        setUserdata(jsonData);
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (

        <>
            {
                udata ?
                    <div>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""
            }
            {
                updata ?
                    <div>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""
            }

            {
                dltdata ?
                    <div>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""
            }


            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Contract Name</th>
                                <th scope="col">Contract Detail</th>
                                <th scope="col">Status</th>
                                
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                        // console.log("yes")
                                        return (
                                            <>
                                                <tr>
                                                    <th scope="row">{id + 1}</th>
                                                    <td>{element.contractName}</td>
                                                    <td>{element.detail}</td>
                                                    <td>{element.status}</td>
                                                    <td className="d-flex justify-content-between">
                                                        <NavLink to={`edit/${element.id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                        <button className="btn btn-danger" onClick={() => deleteuser(element.id)}><DeleteOutlineIcon /></button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default Home

















