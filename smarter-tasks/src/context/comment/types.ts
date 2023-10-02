import React from "react";

export enum CommentAvailableAction {
  FETCH_COMMENT_REQUEST = "FETCH_COMMENT_REQUEST",
  FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS",
  FETCH_COMMENT_FAILURE = "FETCH_COMMENT_FAILURE",
  ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
  ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE",
}

export type CommentAction =
  | { type: CommentAvailableAction.FETCH_COMMENT_REQUEST }
  | { type: CommentAvailableAction.FETCH_COMMENT_SUCCESS; payload: Comment[] }
  | { type: CommentAvailableAction.FETCH_COMMENT_FAILURE; payload: string }
  | { type: CommentAvailableAction.ADD_COMMENT_SUCCESS; payload: Comment }
  | { type: CommentAvailableAction.ADD_COMMENT_FAILURE; payload: string };

export type CommentDispatch = React.Dispatch<CommentAction>;

export interface Comment {
  id: number;
  description: string;
  owner: number;
  task_id: number;
  project_id: number;
  createdAt: Date;
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export interface CommentState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

