import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, UsersState, UsersActions } from "./reducer";

type UsersDispatch = React.Dispatch<UsersActions>;
const UsersStateContext = createContext<UsersState | undefined>(undefined);
const UsersDispatchContext = createContext<UsersDispatch | undefined>(undefined);

export const useUsersState = () => useContext(UsersStateContext);
export const useUsersDispatch = () => useContext(UsersDispatchContext);

export const UsersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Use the users reducer and initial state.
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};
