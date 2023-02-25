import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer.jsx";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const initialState = {
    dark: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
