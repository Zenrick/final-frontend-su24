import { Link } from "react-router-dom";

function AllTasksView({tasks}) {
  if (!tasks.length) {
    return (
      <div>There are no tasks.</div>
    );
  }
  return (
    <>
      <ul>
        {tasks.map((todo, idx) => (
          <li key={todo.id}>Task #{idx+1}: {todo.title}</li>
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
    </>
  );

}

export default AllTasksView;