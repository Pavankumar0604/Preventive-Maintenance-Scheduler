import React, { useState } from "react";
import "./App.css";
import MaintenanceForm from "./MaintenanceForm";
import TaskTable from "./TaskTable";
import CompletedTable from "./CompletedTable";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  
  const addTask = (taskData) => {
    setTasks([
      ...tasks,
      { ...taskData, id: Date.now(), done: false }
    ]);
  };

  
  const markDone = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: true } : t
    );
    setTasks(updatedTasks);
    const completedTask = tasks.find((t) => t.id === id);
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const upcomingTasks = tasks.filter((t) => !t.done);

  return (
    <div className="App">
      <header>
        <img src="./logo.png" alt="Logo" className="logo"/>
        <h1>Preventive Maintenance Scheduler</h1>
      </header>
      <main>
        <MaintenanceForm onAdd={addTask} />
        <h2 className="heading">Scheduled Maintenance Tasks</h2>
        <TaskTable tasks={upcomingTasks} markDone={markDone} />
        <CompletedTable completed={completedTasks} />
      </main>
    </div>
  );
}

export default App;
