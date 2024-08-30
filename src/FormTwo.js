import React, { useState } from 'react';

const FormTwo = ({ handleSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '', context: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);
        setFormData({ name: '', email: '', context: '', subject: '', message: '' });
    };

    return (
        <form onSubmit={onSubmit} style={{ background: '#333', padding: '20px', borderRadius: '8px', color: '#fff' }}>
            <div>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your name" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <div>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Enter your Email" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="context" 
                    value={formData.context} 
                    onChange={handleChange} 
                    placeholder="Write context here" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Select Subject" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <div>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Write your question here" 
                    style={{ width: '100%', marginBottom: '10px', height: '80px' }} 
                />
            </div>
            <button type="submit" style={{ background: '#ff6600', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
                Send Message
            </button>
        </form>
    );
};

export default FormTwo;
