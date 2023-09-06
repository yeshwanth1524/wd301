
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid"; 

interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>("tasks", {
    tasks: [],
  });

  const LeftoverTasks = (updatedTasks: TaskItem[]) => {
    const updatedState = { ...taskAppState, tasks: updatedTasks };
    setTaskAppState(updatedState);
  };

  const addTask = (task: TaskItem) => {
    const newTask = { ...task, id: uuidv4() };
    setTaskAppState({ tasks: [...taskAppState.tasks, newTask] });
  };
  
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">
        Smarter Tasks
      </h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
            Pending
          </h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} LeftoverTasks={LeftoverTasks} />
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
