import './TaskCard.css';

const TaskCard = (props) => {
  const { val, title, dueDate, completedAtDate, assigneeName } = props;
  const isPendingTask = val === '0';

  return (
    <div className="TaskItem bg-cyan-100">
      <h2 className="text-black text-xl font-bold">{title}</h2>
      {isPendingTask ? (
        <p className="text-black text-xl font-bold">Due on: {dueDate}</p>
      ) : (
        <p className="text-black text-xl font-bold">Completed on: {completedAtDate}</p>
      )}
      <p className="text-black text-xl font-bold">Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
