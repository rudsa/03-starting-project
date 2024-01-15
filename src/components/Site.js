import React, { useState } from "react";

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

const Site = () => {
  const [userArrayData, setUserArrayData] = useState([]);
  const saveUserData = (userJsonData) => {
    setUserArrayData([userJsonData, ...userArrayData]);
  };
  return (
    <div>
      <div>
        <AddUser onSaveUserData={saveUserData} />
        {userArrayData.length > 0 && <UsersList users={userArrayData} />}
      </div>
    </div>
  );
};

export default Site;
