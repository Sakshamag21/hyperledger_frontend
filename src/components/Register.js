import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useHistory();

    const [inpval, setINP] = useState({
        contractName: "",
        detail: "",
    })

    const setdata = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setINP((preval) => {
            console.log(inpval)
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        // e.preventDefault();

        const { contractName,detail } = inpval;
        const status='Inactive';
        
        // console.log(name,email)

        const res = await fetch("/register1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contractName,detail,status
            })
        });

        const data = await res.json();
        console.log(data);

        // if (res.status === 422 || !data) {
        //     console.log("error ");
        //     alert("error");

        // } else {
        //     history.push("/")
        //     setUdata(data)
        //     console.log("data added");

        // }
    }

    return (
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Contract Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Contract Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
