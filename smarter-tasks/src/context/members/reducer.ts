interface User {
  id: number;
  name: string;
  email: string;
  org_id: number;
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type UsersDispatch = (action: UsersActions) => void;

export type UsersActions =
  | { type: "FETCH_USERS_REQUEST" }
  | { type: "FETCH_USERS_SUCCESS"; payload: User[] }
  | { type: "FETCH_USERS_FAILURE"; payload: string }
  | { type: "ADD_USER_SUCCESS"; payload: User }
  | { type: "DELETE_USER"; payload: number };

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: UsersState = initialState,
  action: UsersActions
  ): UsersState => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_USER_SUCCESS":
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};