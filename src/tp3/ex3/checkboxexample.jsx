import React, { useState } from "react";

function CheckboxExample() {
  // State to track if the checkbox is checked
  const [isChecked, setIsChecked] = useState(false);

  // Event handler for checkbox change
  const handleCheckboxChange = (event) => {
    // Update the state based on the checkbox status
    console.log("Checkbox is checked:", event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          // Bind the state to the checkbox
          onChange={handleCheckboxChange} // Handle the change event
        />
        Check me
      </label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}.</p>
    </div>
  );
}

export default CheckboxExample;
