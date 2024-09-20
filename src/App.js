import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const handleAddUser = (uName, uAge) => {
    setUserList((prevUser) => {
      return [...prevUser, { name: uName, age: uAge }];
    });
  };

  return (
    <div className="bdy">
      <AddUser onAddUser={handleAddUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
