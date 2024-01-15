import React, { useState } from "react";

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const Site = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userData) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, userData];
    });
  };
  return (
    <div>
      <div>
        <AddUser onAddUser={addUserHandler} />
        {usersList.length > 0 && <UsersList users={usersList} />}
      </div>
    </div>
  );
};

export default Site;
