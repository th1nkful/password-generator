import React from 'react';

const AppContext = React.createContext(null);

export const AppProvider = ({ children }) => {
  const [history, setHistory] = React.useState([]);

  const updateHistory = ({ newItem }) => {
    const historyList = [...history];

    if (newItem) {
      historyList.unshift({
        password: newItem,
        date: new Date(),
      });
    }

    setHistory(historyList.slice(0, 10));
  };

  const contextValue = {
    history,
    updateHistory,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => React.useContext(AppContext);
export default useAppContext;
