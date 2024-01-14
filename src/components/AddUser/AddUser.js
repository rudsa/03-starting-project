import React from "react";
import AddUserForm from "./AddUserForm";

const AddUser = (props) => {
  const saveUserData = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
    };
    console.log(userData);
  };

  return (
    <div>
      <AddUserForm onSaveUserData={saveUserData} />
    </div>
  );
};

export default AddUser;
