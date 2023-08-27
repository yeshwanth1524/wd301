import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  LeftoverTasks: (updatedTasks: TaskItem[]) => void;
}

// interface State {}

const TaskList = (props: Props) => {
  const deleteTask = (taskIndex: number) => {
    const updatedTasks = props.tasks.slice(); 
    updatedTasks.splice(taskIndex, 1); 
    props.LeftoverTasks(updatedTasks); 
  };

  const list = props.tasks.map((task, idx) => (
    <div key={idx} className="taskItemWrapper">
      <Task
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        taskToDelete={() => deleteTask(idx)}
      />
    </div>
  ));
  return <div className="taskListWrapper">{list}</div>;  
};

export default TaskList;