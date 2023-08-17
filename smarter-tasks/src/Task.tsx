import React from 'react';
import "./TaskCard.css";

interface TaskProp {
  title: string;
  dueDate: string,
  description: string
}

class Task extends React.Component<TaskProp> {
  render() {
    const { title, description, dueDate } = this.props;
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{title}</h2>
        <p className="text-sm">
          Due Date: {dueDate}
        </p>
        <p className="text-sm">
          Description: {description}
        </p>
      </div>
    );
  }
}

export default Task;