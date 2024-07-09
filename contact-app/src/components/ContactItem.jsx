const ContactItem = ({ contact, onEdit, onDelete }) => {
    return (
      <li>
        <div className="values">
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
        </div>   
        <div className="buttons">
          <button className="edit" onClick={() => onEdit(contact)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>     

      </li>
    );
  };
  
export default ContactItem  