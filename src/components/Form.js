//https://learning.flatironschool.com/courses/4986/assignments/165690?module_item_id=357573
//initial file: everything collapsed in this single file

import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)

  }


  return (
    <form>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
