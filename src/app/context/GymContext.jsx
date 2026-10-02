"use client";

import React, { createContext, useState } from 'react';

export const GymContext = createContext({
  gymPlan: [],
  setGymPlan: () => {},
  savelist: [],
  setSaveList: () => {},
});

const GymContextProvider = ({children}) => {
     const [gymPlan,  setGymPlan] = useState([]);
  const [savelist,  setSaveList] = useState([]);
  console.log("gymPlan", gymPlan);

  const sharedData = {
    gymPlan,
    setGymPlan,
    savelist,
    setSaveList,
  };

    return (
      <GymContext.Provider value={sharedData}>{children}</GymContext.Provider>
    );
};

export default GymContextProvider;