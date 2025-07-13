import { createContext, useState } from "react";

export const EmissionContext = createContext();

export const EmissionProvider = ({ children }) => {
  const [emissions, setEmissions] = useState(null);

  return (
    <EmissionContext.Provider value={{ emissions, setEmissions }}>
      {children}
    </EmissionContext.Provider>
  );
};
