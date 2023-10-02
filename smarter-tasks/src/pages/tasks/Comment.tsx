import React, { useEffect } from "react";
import { useCommentDispatch, useCommentState } from "../../context/comment/context";
import { fetchComments } from "../../context/comment/actions";
import { useParams } from "react-router-dom";
import { useUsersState } from "../../context/members/context";

export const Comment: React.FC = () => {
  const commentState = useCommentState();
  const { comments } = commentState;
  const commentDispatch = useCommentDispatch();
  const memberState = useUsersState();

  const { projectID, taskID } = useParams<{ projectID: string; taskID: string }>();
  useEffect(() => {
    if (projectID && taskID) {
      fetchComments(commentDispatch, projectID, taskID);
    }
  }, [commentDispatch, projectID, taskID]);

  const formatDate = (date: Date): string => {
    const newDate = new Date(date);
    return `${newDate.toLocaleDateString("en-In")} ${newDate.toLocaleTimeString("en-In")}`;
  };

  const getUserName = (ownerId: number): string | undefined => {
    const user = memberState?.users.find((member) => member.id === ownerId);
    return user?.name;
  };

  return (
    <>
      {comments ? (
        comments.map((comment) => (
          <div key={comment.id} className="comment flex mb-2">
            <p className="mr-3">{comment.description}</p>
            <p className="mr-3">{formatDate(comment.createdAt)}</p>
            <p className="mr-3">{getUserName(comment.owner)}</p>
          </div>
        ))
      ) : (
        <p>No comments available</p>
      )}
    </>
  );
};