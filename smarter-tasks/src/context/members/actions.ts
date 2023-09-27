import { API_ENDPOINT } from "../../config/constants";

export const fetchUsers = async (dispatch: any) => {
  const authToken = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    const userData = await response.json();
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: userData });
  } catch (error) {
    console.log("Error fetching users:", error);
    dispatch({ type: "FETCH_USERS_FAILURE", payload: "Unable to retrieve user data" });
  }
};

export const addUser = async (dispatch: any, newUser: any) => {
  try {
    const authToken = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(newUser),
    });
    
    if (!response.ok) {
      throw new Error("Failed to create a new user");
    }
    
    const responseData = await response.json();
    if (responseData.errors && responseData.errors.length > 0) {
      return { success: false, error: responseData.errors[0].message };
    }
    dispatch({ type: "ADD_USER_SUCCESS", payload: responseData });
    return { success: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { success: false, error };
  }
};

export const deleteUser = async (dispatch: any, userId: number) => {
  try {
    const authToken = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete the user");
    }

    dispatch({ type: "DELETE_USER", payload: userId });
    return { success: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { success: false, error };
  }
};
