import React from "react";

function TaskTable({ tasks, markDone }) {
  return (
    <div className="task-list">
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Task</th>
            <th>Scheduled Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td>{t.asset}</td>
              <td>{t.task}</td>
              <td>{t.date}</td>
              <td>
                <button className="mark-done" onClick={() => markDone(t.id)}>
                  Mark Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
