import React, { useState } from "react";

function FormValidation() {
    const [number, setNumber] = useState(0);
  
    function handleNumberChange(event) {
      const newNumber = parseInt(event.target.value);
      if (newNumber >= 0 && newNumber <= 5) {
        setNumber(newNumber);
      }
    }
  
    return (
      <form>
        <h3> input expects numbers 0 to 5</h3>
        <input type="number" value={number} onChange={handleNumberChange} />
      </form>
    );
  }

export default FormValidation;