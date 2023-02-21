import React from "react";
import EditableRow from "./EditableRow";
import Pagination from "./Pagination";
import ReadOnlyRow from "./ReadOnlyRow";

const HomePage = ({
  contacts,
  handlePaginationButton,
  page,
  search,
  editFormData,
  handleDeleteClick,
  handleEditClick,
  handleCancelClick,
  setSearch,
  handleEditFormSubmit,
  editContactId,
  handleEditFormChange,
  handleSelect,
}) => {
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search by Name, Email and Role"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <form onSubmit={handleEditFormSubmit}>
        <table className="table-container">
          <thead className="header-container" align="left">
            <tr className="header-row">
              <th>
                <input
                  type="checkbox"
                  className="btn-checkbox"
                  name="allSelect"
                  checked={
                    contacts.filter((user) => user?.isChecked !== true).length <
                    1
                  }
                  onChange={handleSelect}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="data-container">
            {contacts.length > 0
              ? contacts
                  .slice(page * 10 - 10, page * 10)
                  .filter((item) => {
                    return search.toLocaleLowerCase() === ""
                      ? item
                      : item.name.toLocaleLowerCase().includes(search) ||
                          item.email.toLocaleLowerCase().includes(search) ||
                          item.role.toLocaleLowerCase().includes(search);
                  })
                  .map((contact) => (
                    <>
                      {editContactId === contact.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                          handleCancelClick={handleCancelClick}
                          handleSelect={handleSelect}
                        />
                      ) : (
                        <ReadOnlyRow
                          contact={contact}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          handleSelect={handleSelect}
                        />
                      )}
                    </>
                  ))
              : "no data"}
          </tbody>
        </table>
      </form>
      {contacts.length > 0 && (
        <Pagination
          contacts={contacts}
          handlePaginationButton={handlePaginationButton}
          page={page}
        />
      )}
    </>
  );
};

export default HomePage;
