import React from "react";
import "../App.css";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="data-row" key={contact.id}>
      <td>
        <input type="checkbox" className="btn-checkbox" />
      </td>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.role}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
          className="e-btn"
        >
          Edit
        </button>
        <button
         className="e-btn" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
