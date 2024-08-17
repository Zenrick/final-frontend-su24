import { Link } from "react-router-dom";

function NewTaskView({ handleSubmit }) {
    let priortityMarkup = (
      <p>Priority level:
        <label>
          <input type="radio" name="taskPriority" value="1" /> Low
        </label>
        <label>
          <input type="radio" name="taskPriority" value="2" /> Medium
        </label>
        <label>
          <input type="radio" name="taskPriority" value="3" /> High
        </label>
      </p>
    );
    return (
        <section >
          <h2>Add a New Task</h2>
          <form onSubmit={handleSubmit} id="newtaskform">
            <label>
              Text input: <input name="taskContent" />
            </label>  
            {priortityMarkup}
            <button>Save Task</button>
          </form>
          <br/>
          <Link to={`/tasks`}><button style={{margin: "8px"}}>Back to All Tasks</button></Link>
        </section>
      )

}

export default NewTaskView;