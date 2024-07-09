import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = ({ selectedContact, onSave }) => {
  const [contact, setContact] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact.id) {
      await axios.put(`http://localhost:3005/contacts/${contact.id}`, contact);
    } else {
      await axios.post('http://localhost:3005/contacts', contact);
    }
    onSave();
    setContact({ name: '', email: '' });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">Save</button>
      </form>
    </div>
    
  );
};

export default ContactForm;
