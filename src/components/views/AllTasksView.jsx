let ulStyle = {
  listStyleType: "none",
  padding: 0,
  border: "1px solid #d0d",
};

let liStyle = {
  padding: "8px 16px",
  borderBottom: "1px solid #d0d",
};

let liStyleLastChild = {
  ...liStyle,
  borderBottom: "none",
};

import { Link } from "react-router-dom";

function AllTasksView({tasks}) {
  let deleteTask = (taskId) => {};

  if (!tasks.length) {
    return (
      <>
        <Link to={`/`}><button>Back to Home</button></Link>
        <div>There are no tasks.</div>
      </>
    );
  }
  return (
    <>
      <Link to={`/`}><button>Back to Home</button></Link>
      <div style={ulStyle}>
        {tasks.map((todo, idx) => {
          let styleBool = idx === tasks.length - 1 ? liStyleLastChild : liStyle;
          return (
            <div key={todo.id} style={styleBool}>
              <h4>Task #{idx+1}: {todo.title}</h4>
              <h5>Assigned to: Employee {todo.userId}</h5>
              <h6>{todo.completed ? "COMPLETED" : "IN PROGRESS"}</h6>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );

}

export default AllTasksView;