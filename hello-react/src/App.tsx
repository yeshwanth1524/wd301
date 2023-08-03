import React from 'react';
import TaskCard from './TaskCard';

function App() {
  return (
    <div className="font-sans">
      <h1 className="text-center text-4xl font-bold mt-8 text-blue-800">Smarter Tasks</h1>
      <h2 className="text-center mt-4 text-lg">
        <b>Project:</b> Graduation Final Year Project (Revamp College Website)
      </h2>

      <div className="flex justify-center space-x-8 mt-12">
        <div className="w-1/3 p-6 bg-blue-200 rounded-lg shadow-lg">
          <h2 className="text-white text-xl mb-4 text-center bg-blue-800 py-2 rounded">Pending</h2>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"/>
          <TaskCard title="Add blog" dueDate="22nd March" assigneeName="Rohit M"/>
          <p className="text-black">&#x2795; New task</p>
        </div>

        <div className="w-1/3 p-6 bg-blue-200 rounded-lg shadow-lg">
          <h2 className="text-white text-xl mb-4 text-center bg-blue-800 py-2 rounded">Done</h2>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"/>
          <TaskCard title="Get approval from principal" completedAtDate="20th April" assigneeName="Ajay S"/>
        </div>
      </div>
    </div>
  );
}

export default App;
