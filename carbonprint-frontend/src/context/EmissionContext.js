import React, { createContext, useState, useEffect, useContext } from "react";

export const EmissionContext = createContext();

export const useEmission = () => {
  const context = useContext(EmissionContext);
  if (!context) {
    throw new Error("useEmission must be used within an EmissionProvider");
  }
  return context;
};

export const EmissionProvider = ({ children }) => {
  const [emissions, setEmissions] = useState({
    electricity: 0,
    water: 0,
    transport: 0,
    food: 0,
    lpg: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalEmissions, setTotalEmissions] = useState(0);

  // Calculate total emissions whenever emissions change
  useEffect(() => {
    const total = Object.values(emissions).reduce((sum, value) => sum + value, 0);
    setTotalEmissions(total);
  }, [emissions]);

  const addEmission = (category, amount) => {
    if (amount < 0) {
      setError("Emission amount cannot be negative");
      return;
    }
    
    setEmissions(prev => ({
      ...prev,
      [category]: prev[category] + amount
    }));
    setError(null);
  };

  const updateEmission = (category, amount) => {
    if (amount < 0) {
      setError("Emission amount cannot be negative");
      return;
    }
    
    setEmissions(prev => ({
      ...prev,
      [category]: amount
    }));
    setError(null);
  };

  const resetEmissions = () => {
    setEmissions({
      electricity: 0,
      water: 0,
      transport: 0,
      food: 0,
      lpg: 0,
    });
    setError(null);
  };

  const getEmissionPercentage = (category) => {
    if (totalEmissions === 0) return 0;
    return ((emissions[category] / totalEmissions) * 100).toFixed(1);
  };

  const value = {
    emissions,
    setEmissions,
    loading,
    setLoading,
    error,
    setError,
    totalEmissions,
    addEmission,
    updateEmission,
    resetEmissions,
    getEmissionPercentage,
  };

  return (
    <EmissionContext.Provider value={value}>
      {children}
    </EmissionContext.Provider>
  );
};
