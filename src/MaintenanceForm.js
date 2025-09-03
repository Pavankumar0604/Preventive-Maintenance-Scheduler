import React, { useState } from "react";

function MaintenanceForm({ onAdd }) {
  const [asset, setAsset] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!asset || !task || !date) return;
    onAdd({ asset, task, date });
    setAsset(""); setTask(""); setDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Asset"
        value={asset}
        onChange={e => setAsset(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default MaintenanceForm;
