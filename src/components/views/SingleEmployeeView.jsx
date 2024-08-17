import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SingleEmployeeView() {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const response = await axios.get(`/api/employees/${employeeId}`);
        setEmployee(response.data);
        const tasksResponse = await axios.get(`/api/tasks?employeeId=${employeeId}`);
        setTasks(tasksResponse.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    }
    fetchEmployee();
  }, [employeeId]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/employees">Back to all employees</Link>
      <section>
        <article>
          <h2>{employee.firstName} {employee.lastName}</h2>
          <p>Department: {employee.department}</p>
          <h3>Assigned Tasks:</h3>
          <ul>
            {tasks.length ? (
              tasks.map(task => (
                <li key={task.id}>
                  <Link to={`/tasks/${task.id}`}>{task.description}</Link>
                </li>
              ))
            ) : (
              <p>No tasks assigned.</p>
            )}
          </ul>
        </article>
      </section>
      <hr/>
      <Link to={`/employees/${employeeId}/edit`}><h3>Edit employee information</h3></Link>
    </div>
  );
}

export default SingleEmployeeView;
