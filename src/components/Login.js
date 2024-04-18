import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [forgotPasswordInput, setForgotPasswordInput] = useState('');
    const [loginProgress, setLoginProgress] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        console.log("Username:", username);
        console.log("Password:", password);
        setLoginProgress(true);

        try {
            const response = await fetch('http://localhost:8000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: username, password: password })
            });

            if (response.ok) {
                setLoginProgress(false);
                const data = await response.json();
                console.log(data.name);
                console.log(data.role);
                console.log(data.id);
                if (data.role === 'student') {
                    window.location.href = `./studentDashboard/${data.id}`;
                }
                if (data.role === 'teacher') {
                    window.location.href = `./teacherDashboard/${data.id}`;
                }
                console.log('User Logged in successfully');
            } else {
                setLoginProgress(false);
                alert('Wrong Name and password');
            }
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
            {!loginProgress && <div className="createbox" style={{ border: "2px solid #007bff", borderRadius: '20px', padding: "20px", maxWidth: "400px" }}>
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
            {loginProgress && <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
    );
}

export default Login;
