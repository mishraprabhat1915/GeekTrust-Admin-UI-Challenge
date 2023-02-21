import React, { useState, useEffect } from "react";
import "./App.css";
import useGetProducts from "./UseGetProducts";
import HomePage from "./components/HomePage";

const App = () => {
  const [data] = useGetProducts();
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  // const [userSelected, setUserSelected] = useState([])
  useEffect(() => {
    if (data.length > 0) {
      setContacts(data);
    }
  }, [data]);

  const [editFormData, setEditFormData] = useState({
    name: "",
    role: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      role: editFormData.role,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      role: contact.role,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  // handling pagination data

  const handlePaginationButton = (data) => {
    console.log(data);
    if (data > 0 && data <= Math.ceil(contacts.length / 10) && data !== page) {
      setPage(data);
    }
  };

  const handleSelect = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = contacts.map((user) => {
        return { ...user, isChecked: checked };
      });
      setContacts(tempUser);
    } else {
      const tempUser = contacts.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setContacts(tempUser);
    }
  };

  return (
    <div className="app-container">
      <HomePage
        contacts={contacts}
        handlePaginationButton={handlePaginationButton}
        page={page}
        search={search}
        editFormData={editFormData}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
        handleCancelClick={handleCancelClick}
        setSearch={setSearch}
        handleEditFormSubmit={handleEditFormSubmit}
        editContactId={editContactId}
        handleEditFormChange={handleEditFormChange}
        handleSelect={handleSelect}
      />
    </div>
  );
};

export default App;
