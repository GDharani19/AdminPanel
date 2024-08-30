
// import React, { useEffect, useState } from 'react';
// import './AdminPanel.css';
// import enquiryData from '../data.json';
// import contactData from '../senddata.json';

// const AdminPanel = () => {
//     const [enquiries, setEnquiries] = useState([]);
//     const [contacts, setContacts] = useState([]);

//     useEffect(() => {
        
//         fetchEnquiries();
//         fetchContacts();
//     }, []);

//     const fetchEnquiries = async () => {
        
//         try {
            
//             setEnquiries(enquiryData);
//         } catch (error) {
//             console.error('Error fetching enquiries:', error);
//         }
//     };

//     const fetchContacts = async () => {
        
//         try {
            
//             setContacts(contactData);
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//         }
//     };

//     return (
//         <div className="admin-panel">
//             <h1>Admin Panel</h1>
//             <div className="sections-container">
//                 <div className="section">
//                     <h2>Send Enquiries</h2>
//                     <div className="data-list">
//                         {enquiries.length === 0 ? (
//                             <p>No enquiries found.</p>
//                         ) : (
//                             enquiries.map((enquiry) => (
//                                 <div key={enquiry.id} className="data-card">
//                                     <p><strong>Name:</strong> {enquiry.name}</p>
//                                     <p><strong>Email:</strong> {enquiry.email}</p>
//                                     <p><strong>Figma URL:</strong> <a href={enquiry.figma_url} target="_blank" rel="noopener noreferrer">{enquiry.figma_url}</a></p>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//                 <div className="section">
//                     <h2>Contact Form</h2>
//                     <div className="data-list">
//                         {contacts.length === 0 ? (
//                             <p>No contacts found.</p>
//                         ) : (
//                             contacts.map((contact) => (
//                                 <div key={contact.id} className="data-card">
//                                     <p><strong>Name:</strong> {contact.name}</p>
//                                     <p><strong>Email:</strong> {contact.email}</p>
//                                     <p><strong>Context:</strong> {contact.context}</p>
//                                     <p><strong>Message:</strong> {contact.message}</p>
//                                     <p><strong>Description:</strong> {contact.description}</p>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// src/components/AdminPanel.js
import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import enquiryData from '../data.json';
import contactData from '../senddata.json';

const AdminPanel = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        fetchEnquiries();
        fetchContacts();
    }, []);

    const fetchEnquiries = async () => {
        try {
            setEnquiries(enquiryData);
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };

    const fetchContacts = async () => {
        try {
            setContacts(contactData);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="admin-panel">
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <h1>Admin Panel</h1>
            <div className="sections-container">
                <div className="section">
                    <h2>Send Enquiries</h2>
                    <div className="data-list">
                        {enquiries.length === 0 ? (
                            <p>No enquiries found.</p>
                        ) : (
                            enquiries.map((enquiry) => (
                                <div key={enquiry.id} className="data-card">
                                    <p><strong>Name:</strong> {enquiry.name}</p>
                                    <p><strong>Email:</strong> {enquiry.email}</p>
                                    <p><strong>Figma URL:</strong> <a href={enquiry.figma_url} target="_blank" rel="noopener noreferrer">{enquiry.figma_url}</a></p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="section">
                    <h2>Contact Form</h2>
                    <div className="data-list">
                        {contacts.length === 0 ? (
                            <p>No contacts found.</p>
                        ) : (
                            contacts.map((contact) => (
                                <div key={contact.id} className="data-card">
                                    <p><strong>Name:</strong> {contact.name}</p>
                                    <p><strong>Email:</strong> {contact.email}</p>
                                    <p><strong>Context:</strong> {contact.context}</p>
                                    <p><strong>Message:</strong> {contact.message}</p>
                                    <p><strong>Description:</strong> {contact.description}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
