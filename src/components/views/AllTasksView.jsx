import { Link } from "react-router-dom";

function AllTasksView(props) {
    return (
        <>
          <h4>ALL TASKS</h4>
          <Link to={`/`}><button>Back to Home</button></Link>
        </>    
    );

}

export default AllTasksView;