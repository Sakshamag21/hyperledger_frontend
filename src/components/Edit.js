import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { updatedata } from './context/ContextProvider';

const Edit = () => {
    const { updata, setUPdata } = useContext(updatedata);
    const history = useHistory("");
    const { id } = useParams("");
    const [userData, setUserData] = useState(null);
    console.log(id)
    const getdata = async (id) => {
        console.log(id)
        
            const response = await fetch('../data.json');
            console.log(response)
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            console.log(jsonData)
            const userData = jsonData.find(item => item.id === parseInt(id));
            console.log(userData)
            if (userData) {
                setUserData(userData);
            } else {
                throw new Error(`User with ID ${id} not found`);
            }
        
    };
    
    useEffect(() => {
        getdata(id);
    }, [id]); // Execute getdata when id changes
    

    const acceptChanges = async () => {
        const res = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "Active" })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            alert("Error updating user data");
        } else {
            history.push("/");
            setUPdata(data);
        }
    };

    const revokeChanges = async () => {
        const res = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "Inactive" })
        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            alert("Error updating user data");
        } else {
            history.push("/");
            setUPdata(data);
        }
    };

    return (
        <div className="container">
            <div className="mt-4">
                {userData && (
                    <div>
                        <p><strong>Contarct Name:</strong> {userData.contractName}</p>
                        <p><strong>Contract Detail:</strong> {userData.detail}</p>
                    </div>
                )}
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 col-6">
                        <button type="button" onClick={acceptChanges} className="btn btn-success">Accept</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-6">
                        <button type="button" onClick={revokeChanges} className="btn btn-danger">Revoke</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;
