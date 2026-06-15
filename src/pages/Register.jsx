import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Registration successful! ✨');
  };

  return (
    <div className="min-h-screen">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        
        <div className="flex">
          <label>
            <input 
              className="input" 
              type="text" 
              name="firstName"
              placeholder=" " 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <span>Firstname</span>
          </label>

          <label>
            <input 
              className="input" 
              type="text" 
              name="lastName"
              placeholder=" " 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <span>Lastname</span>
          </label>
        </div>  
            
        <label>
          <input 
            className="input" 
            type="email" 
            name="email"
            placeholder=" " 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span>Email</span>
        </label> 
        
        <label>
          <input 
            className="input" 
            type="text" 
            name="password"
            placeholder=" " 
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span>Unikal telefon raqam</span>
        </label>
        
        <label>
          <input 
            className="input" 
            type="password" 
            name="confirmPassword"
            placeholder=" " 
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span>Confirm password</span>
        </label>
        
        <button type="submit" className="submit">Submit</button>
        
        <p className="signin">
          Already have an account? <a
          onClick={() => (window.location.href = "/login")}
          href="#">Signin</a>
        </p>
      </form>
    </div>
  );
}

export default Register;