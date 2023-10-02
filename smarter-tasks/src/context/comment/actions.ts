/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "../../config/constants";
import { CommentAvailableAction, CommentDispatch } from "./types";

export const fetchComments = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
) => {
  const userToken = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENT_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      },
    );
    if (!response) throw new Error("Failed to fetch comments");

    const data = await response.json();
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENT_FAILURE,
      payload: "Unable to load comments",
    });
  }
};

export const addComment = async (
  dispatch: CommentDispatch,
  projectID: string,
  taskID: string,
  description: any,
) => {
  const userToken = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(description),
      },
    );
    if (!response) throw new Error("Failed to add a comment");

    const data = await response.json();
    dispatch({
      type: CommentAvailableAction.ADD_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: CommentAvailableAction.ADD_COMMENT_FAILURE,
      payload: "Unable to add a comment",
    });
  }
};
