import React from "react";

function CompletedTable({ completed }) {
  if (completed.length === 0) return null;
  return (
    <div className="completed-task-list">
      <h2 className="cheading">Completed Maintenance</h2>
      <table>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Task</th>
            <th>Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {completed.map((ct) => (
            <tr key={ct.id}>
              <td>{ct.asset}</td>
              <td>{ct.task}</td>
              <td>{ct.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedTable;
