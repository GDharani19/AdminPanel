import React, { useState } from 'react';

const FormOne = ({ handleSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '', figmaUrl: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData);
        setFormData({ name: '', email: '', figmaUrl: '' });
    };

    return (
        <form onSubmit={onSubmit} style={{ background: '#333', padding: '20px', borderRadius: '8px', color: '#fff' }}>
            <div>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your Name" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <div>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <div>
                <input 
                    type="text" 
                    name="figmaUrl" 
                    value={formData.figmaUrl} 
                    onChange={handleChange} 
                    placeholder="Paste your Figma design URL" 
                    style={{ width: '100%', marginBottom: '10px' }} 
                />
            </div>
            <button type="submit" style={{ background: '#ff6600', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
                Send an Inquiry
            </button>
        </form>
    );
};

export default FormOne;

