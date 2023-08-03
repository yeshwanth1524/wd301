import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const isValidDate = (dateString?: string): boolean => {
  if (!dateString) return false;
  return true;
};

const TaskCard: React.FC<TaskCardProps> = (props) => {
  const { title, dueDate, completedAtDate, assigneeName } = props;

  return (
    <div className="TaskItem bg-cyan-100">
      <h2 className="text-black text-xl font-bold">{title}</h2>
      {isValidDate(dueDate) && (
        <p className="text-black text-xl font-bold">Due on: {dueDate}</p>
      )}
      {isValidDate(completedAtDate) && (
        <p className="text-black text-xl font-bold">Completed on: {completedAtDate}</p>
      )}
      <p className="text-black text-xl font-bold">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
