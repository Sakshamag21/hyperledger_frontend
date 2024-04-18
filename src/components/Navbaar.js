import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react';

const Navbaar = (props) => {
    const titleInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
    
        const enteredTitle = titleInputRef.current.value;
        // console.log(enteredTitle);
        props.parentCallback(enteredTitle);
        
        }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Contract App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
