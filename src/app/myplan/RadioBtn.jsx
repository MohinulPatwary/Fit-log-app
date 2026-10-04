"use client";

import React, { useState } from "react";

const RadioBtn = () => {
  // 1. DATA: Lists of items for both states
  const planUpper = ["Plan Feature 1", "Plan Feature 2"];
  const savedUpper = ["Saved Item 1", "Saved Item 2"];

  const planLower = []; // Empty array to test default tag
  const savedLower = ["Saved Detail 1", "Saved Detail 2"];

  // 2. STATE: Tracks which option is active ("plan" or "saved")
  const [selectedOption, setSelectedOption] = useState;

  // 3. DECISION LOGIC: Choose which data to show based on state
  let activeUpperData;
  let activeLowerData;

  if (selectedOption === "plan") {
    activeUpperData = planUpper;
    activeLowerData = planLower;
  } else {
    activeUpperData = savedUpper;
    activeLowerData = savedLower;
  }

  // 4. LOWER SECTION CHECK: Show fallback tag if array is empty
  let lowerContent;

  if (activeLowerData.length === 0) {
    lowerContent = (
      <div>
        <strong>Default Tag:</strong> No items available for this choice.
      </div>
    );
  } else {
    lowerContent = (
      <div>
        <div>{activeLowerData[0]}</div>
        <div>{activeLowerData[1]}</div>
      </div>
    );
  }

  return (
    <div>
   
      <div>
        <h2>Upper Components</h2>
        <div>{activeUpperData[0]}</div>
        <div>{activeUpperData[1]}</div>
      </div>

      <hr />

   
      <div>
        <button onClick={() => setSelectedOption("plan")}>
          Select Plan
        </button>

        <button onClick={() => setSelectedOption("saved")}>
          Select Saved
        </button>

        <p>Currently Selected: {selectedOption}</p>
      </div>

      <hr />

      
      <div>
        <h2>Lower Components</h2>
        {lowerContent}
      </div>
    </div>
  );
};

export default RadioBtn;