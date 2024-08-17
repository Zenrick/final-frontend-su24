import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteEmployeeContainer() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/employees/${employeeId}`);
      navigate('/employees');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Are you sure you want to delete this employee?</h2>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
}

export default DeleteEmployeeContainer;
