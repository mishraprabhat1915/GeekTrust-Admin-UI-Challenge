import React from "react";
import "../App.css";
const ReadOnlyRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
  handleSelect,
}) => {
  return (
    <tr className="data-row" key={contact.id}>
      <td>
        <input
          type="checkbox"
          className="btn-checkbox"
          name={contact.name}
          checked={contact?.isChecked || false}
          onChange={handleSelect}
        />
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
          className="e-btn"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
