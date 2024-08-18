import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../store/employeesSlice";
import EditEmployeeView from '../views/EditEmployeeView';

function EditEmployeeContainer() {
  let { employeeId } = useParams();
  employeeId = parseInt(employeeId);

  const employee = useSelector(state =>
    state.employees.find(emp => emp.id === employeeId)
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const updatedEmployee = {
      id: employeeId,
      firstname: formJson.firstname,
      lastname: formJson.lastname,
      department: formJson.department,
    };

    dispatch(updateEmployee(updatedEmployee));
  }

  return <EditEmployeeView employee={employee} handleSubmit={handleSubmit} />
}

export default EditEmployeeContainer;
