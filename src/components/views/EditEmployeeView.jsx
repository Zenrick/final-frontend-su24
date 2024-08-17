import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditEmployeeView() {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const response = await axios.get(`/api/employees/${employeeId}`);
        setEmployee(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setDepartment(response.data.department);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    }
    fetchEmployee();
  }, [employeeId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/employees/${employeeId}`, { firstName, lastName, department });
      navigate(`/employees/${employeeId}`);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <br />
        <label>
          Department:
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEmployeeView;
