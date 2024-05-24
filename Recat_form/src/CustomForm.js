import React, { useState } from 'react';
import './CustomForm.css';

const CustomForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = {};

        if (!name) {
            validationErrors.name = "This field is required";
        }

        if (!email) {
            validationErrors.email = "This field is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Form can be submitted
            alert("Form submitted successfully!");
        }
    };
    
    return (
        <div className='border-gray-700 bg-red-400 flex justify-center w-100 h-dvh items-center'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-start'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    /><br />
                    {errors.name && <span className="error" style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    /><br />
                    {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CustomForm;
