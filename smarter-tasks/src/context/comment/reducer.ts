import { Reducer } from "react";
import { CommentAction, CommentAvailableAction, CommentState } from "./types";

export const initialCommentState: CommentState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentReducer: Reducer<CommentState, CommentAction> = (
  state = initialCommentState,
  actions,
): CommentState => {
  switch (actions.type) {
    case CommentAvailableAction.FETCH_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CommentAvailableAction.FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: actions.payload,
      };
    case CommentAvailableAction.FETCH_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: actions.payload,
      };
    case CommentAvailableAction.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: [actions.payload, ...state.comments],
      };
    case CommentAvailableAction.ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: actions.payload,
      };
    default:
      return state;
  }
};