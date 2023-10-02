import React, { createContext, useContext, useReducer } from "react";
import { commentReducer, initialCommentState } from "./reducer";
import { CommentDispatch, CommentState } from "./types";

const CommentStateContext = createContext<CommentState>(initialCommentState);
const CommentDispatchContext = createContext<CommentDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(commentReducer, initialCommentState);
  return (
    <CommentStateContext.Provider value={state}>
      <CommentDispatchContext.Provider value={dispatch}>
        {children}
      </CommentDispatchContext.Provider>
    </CommentStateContext.Provider>
  );
};

export const useCommentState = () => useContext(CommentStateContext);
export const useCommentDispatch = () => useContext(CommentDispatchContext);