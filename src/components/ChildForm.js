import React from "react";

function ChildForm({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ChildForm;