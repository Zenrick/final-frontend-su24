import React from 'react';
import { Link } from 'react-router-dom';

function AllEmployeesView({ employees }) {
  if (!employees.length) {
    return <p>No employees available.</p>;
  }

  return (
    <div>
      <h2>All Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>{employee.firstName} {employee.lastName}</Link>
            {' '}
            <Link to={`/employees/${employee.id}/edit`}>Edit</Link>
            {' '}
            <Link to={`/employees/${employee.id}/delete`}>Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEmployeesView;
