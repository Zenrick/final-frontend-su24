import React from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/employeesSlice';
import AddEmployeeView from '../views/AddEmployeeView';

function AddEmployeeContainer() {
  const dispatch = useDispatch();

  const handleAddEmployee = (employee) => {
    dispatch(addEmployee(employee));
  };

  return (
    <AddEmployeeView addEmployee={handleAddEmployee} />
  );
}

export default AddEmployeeContainer;
