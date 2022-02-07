import React, { useState } from "react";
import ChildForm from "./ChildForm";
import DisplayData from "./DisplayData";
import FormValidation from "./FormValidation";
import FormValidationWithInvalid from "./FormValidationWithInvalid";



function ParentComponent() {
  const [firstName, setFirstName] = useState("Chun");
  const [lastName, setLastName] = useState("Yi");

  function handleFirstNameChange(event) {
      console.log(event.target.value)
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    console.log(event.target.value)
    setLastName(event.target.value);
  }

  //firstName and lastName props; event callbacks as fnProps
  //displayData is sibling to ChildForm: sending as props
  return (
    <div>
        <ChildForm
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
        <FormValidation />
        <FormValidationWithInvalid />
    </div>
  );
}

export default ParentComponent;