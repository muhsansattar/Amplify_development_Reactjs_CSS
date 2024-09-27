import React, { useState } from 'react';
import './form.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(formData.name+formData.email+formData.message+formData.phone+formData.service)
  };

  return (
    <div className='form-container'>
    <h2 id="contct">Contact us</h2>
    <p>Perfect websites, powered by great communication</p>
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-control custom-select"
            required
          >
            <option value="service">Select a service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          placeholder="Project Details..."
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">Send</button>
    </form>
    </div>
  );
};

export default ContactForm;
