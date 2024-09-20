import React from "react";

const submitHandler = (event) => {
  event.preventDefault();
  console.log("Form submitted");
};

const AddUser = (props) => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">username</label>
      <input
        id="username"
        type="text"
        placeholder="Enter User Name"
        onChange={props.changeHandler}
      />
      <label htmlFor="age">Age (Years)</label>
      <input
        id="age"
        type="number"
        placeholder="Enter User Age"
        onChange={props.changeHandler}
      />
      <button onClick={props.addUser}>Add User</button>
    </form>
  );
};

export default AddUser;
