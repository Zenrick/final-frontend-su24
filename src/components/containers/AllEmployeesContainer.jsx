import AllEmployeesView from "../views/AllEmployeesView";

function AllEmployeesContainer() {
    let employees = [{id: 234432, name: "Zenrick"}, {id: 1420, name: "Billy"}];
    return (
        <AllEmployeesView employees={employees} />
    );
}

export default AllEmployeesContainer;