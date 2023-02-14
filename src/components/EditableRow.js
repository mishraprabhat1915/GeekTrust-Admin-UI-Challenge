import React from "react";
import "../App.css";
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className="data-row editable-mode" key={editFormData.id}>
      <td>
        <input type="checkbox" className="btn-checkbox" />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter an role..."
          name="role"
          value={editFormData.role}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit" className="e-btn">
          Save
        </button>
        <button className="e-btn" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
