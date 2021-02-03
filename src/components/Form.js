import React, { useState } from "react";
import DisplayData from "./DisplayData"

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  
  function handleLastNameChange(event) {
    console.log(event.target.value)
    setLastName(event.target.value);
  } 

  return (
    <div>
      <form>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} /> 
        <button type="submit">Submit</button>
      </form>
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default Form;
