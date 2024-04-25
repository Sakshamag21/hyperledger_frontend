import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Context } from '..';

function Login() {
    
    const [forgotPasswordInput, setForgotPasswordInput] = useState('');
    const [loginProgress, setLoginProgress] = useState(false);
    let users = [];

    const {isAuthenticatedEmploye , setIsAuthenticatedEmploye} = useContext(Context);

    const [flag, setFlag] = useState(true);

    // useEffect(() => {
    //     setUsers(responseData);
    // }, []);

      
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const  response = await axios.get('http://localhost:3002/query?channelid=mychannel&chaincodeid=basictest&function=GetAllUsers', {
                headers: {
                    'Content-Type': 'application/json',
                },
            
            });
            
            const responseData = response.data; // Assuming the response data is an object with a 'users' property
            
            users = responseData;
            // console.log(flag);
            console.log("users : " , users); // Accessing the 'users' property from the response data
                // Now you can use the responseData.users array as needed
            setFlag(true);
            setIsAuthenticatedEmploye(true);
            // console.log(Response.users);


            // if (response.ok) {
            //     // setLoginProgress(false);
            //     const data = await response.data;
            //     console.log(data);
            //     // console.log(data.role);
            //     // console.log(data.id);
            //     // if (data.role === 'student') {
            //     //     window.location.href = `./studentDashboard/${data.id}`;
            //     // }
            //     // if (data.role === 'teacher') {
            //     //     window.location.href = `./teacherDashboard/${data.id}`;
            //     // }
            //     console.log('User Logged in successfully');
            // } else {
            //     setLoginProgress(false);
            //     alert('Wrong Name and password');
            // }
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert('Something went wrong with server')
        }
    };


    


    const handleForgotPassword = () => {
        const username = prompt("Enter your username");
        if (username) {
            // Implement the logic to handle forgot password
            console.log('Forgot Password Input:', username);
        }
    };

    return (
        <div className='login-signup' style={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {<div className="createbox" style={{ border: "2px solid #007bff", borderRadius: '20px', padding: "20px", maxWidth: "400px" }}>
                <form className="form" id="signin" onSubmit={handleLogin}>
                    <h1 className="form__title">Login</h1>
                    <div className="form__input-group" style={{ marginBottom: "20px" }}>
                        <input type="text" className='form-control' name="username" placeholder="Full Name" />
                    </div>
                    <div className="form__input-group" style={{ marginBottom: "20px" }}>
                        <input type="password" className='form-control' name="password" placeholder="Password" />
                    </div>
                    <button className="btn btn-primary form__button" type="submit" style={{ marginBottom: "15px" }}>Login</button>
                    <div className="form__link">
                        <button className="btn btn-link" onClick={handleForgotPassword}>Forgot Name or Password</button>
                    </div>
                </form>
            </div>}
            


            {flag && users.map((user, index) => (
                <div key={index}>
                    <p>UserID: {user.UserID}</p>
                    <p>Password: {user.Password}</p>
                    <p>UserType: {user.UserType}</p>
                    <p>BankName: {user.BankName}</p>
                    <p>BankAccountNumber: {user.BankAccountNumber}</p>
                </div>
            ))}
{/* 
            {loginProgress && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>} */}
        </div>
    );
}

export default Login;
