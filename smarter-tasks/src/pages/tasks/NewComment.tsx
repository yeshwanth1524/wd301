import { useState } from "react";
import { Comment } from "../tasks/Comment";
import { useParams } from "react-router-dom";
import { addComment } from "../../context/comment/actions";
import { useCommentDispatch } from "../../context/comment/context";

export const NewComment = () => {
  const { projectID, taskID } = useParams();
  const commentDispatch = useCommentDispatch();
  const [description, setDescription] = useState("");

  const handleAddComment = async () => {
    try {
      const comment = {
        description,
      };
      await addComment(commentDispatch, projectID ?? "", taskID ?? "", comment);
      setDescription("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <h1 className="my-2">Comments</h1>
      <div className="flex">
        <input
          type="text"
          id="commentBox"
          placeholder="Enter comment"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-md py-1 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
        <button
          type="button"
          id="addCommentBtn"
          onClick={handleAddComment}
          className="justify-center rounded-md border border-transparent bg-blue-600 px-4 py-1 mx-2 my-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Add Comment
        </button>
      </div>
      <Comment />
    </>
  );
};
