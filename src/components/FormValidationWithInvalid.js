import React, { useState } from 'react';

function FormValidationWithInvalid() {
    const [number, setNumber] = useState(0);
    const [error, setError] = useState(null);
  
    function handleNumberChange(event) {
      const newNumber = parseInt(event.target.value);
      if (newNumber >= 0 && newNumber <= 5) {
        setNumber(newNumber);
        setError(null);
      } else {
        setError(`${newNumber} is not a valid number!`);
      }
    }
  
    return (
      <form>
        <h3>If input is invalid, throws error</h3>
        <input type="number" value={number} onChange={handleNumberChange} />
        {error ? <span style={{ color: "red" }}>{error}</span> : null}
      </form>
    );
  }

export default FormValidationWithInvalid