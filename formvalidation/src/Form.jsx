import React, { useState } from 'react';

const Form = () => {
  // State variables for form fields and validation messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully");
      alert("form submitted succesfully!..");
    } else {
      setErrors(formErrors);
    }
  };

  // Function to validate the entire form
  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email format";
    }
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    return formErrors;
  };

  // Real-time validation on input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setErrors((prev) => ({ ...prev, name: "" })); // Clear name error
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(e.target.value)) {
      setErrors((prev) => ({ ...prev, email: "" })); // Clear email error if valid
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 6) {
      setErrors((prev) => ({ ...prev, password: "" })); // Clear password error if valid
    }
  };

  return (
    <div className='w-full px-4 sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto mt-10 bg-slate-300 rounded-lg p-6 lg:w-[640px]'>
        <h1 className='text-center text-2xl font-bold mb-6'>Your Information</h1>
        <form>
          <div className='mb-4'>
            <input 
              className='w-full p-3 rounded border border-gray-300' 
              type="text" 
              placeholder='Enter your name' 
              value={name} 
              onChange={handleNameChange} 
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className='mb-4'>
            <input 
              className='w-full p-3 rounded border border-gray-300' 
              type="text" 
              placeholder='Email' 
              value={email} 
              onChange={handleEmailChange} 
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className='mb-4'>
            <input 
              className='w-full p-3 rounded border border-gray-300' 
              type="password" 
              placeholder='Password' 
              value={password} 
              onChange={handlePasswordChange} 
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div>
            <button 
              className='w-full p-3 bg-slate-500 text-white rounded-md' 
              type="submit" 
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
