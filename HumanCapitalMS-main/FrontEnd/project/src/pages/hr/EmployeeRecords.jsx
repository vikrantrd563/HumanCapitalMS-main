import { useState } from 'react';

function EmployeeRecords() {
  const [employees] = useState([
    {
      id: 1,
      name: 'John Doe',
      department: 'IT',
      position: 'Software Developer',
      joinDate: '2023-01-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'HR',
      position: 'HR Manager',
      joinDate: '2022-06-20',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      department: 'Finance',
      position: 'Accountant',
      joinDate: '2023-03-10',
      status: 'On Leave'
    }
  ]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Employee Records</h2>
        <button className="btn btn-primary">
          Add New Employee
        </button>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search employees..."
              />
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">All Departments</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <div className="col-md-2">
              <select className="form-select">
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.position}</td>
                    <td>{employee.joinDate}</td>
                    <td>
                      <span className={`badge ${
                        employee.status === 'Active' ? 'bg-success' :
                        employee.status === 'On Leave' ? 'bg-warning' :
                        'bg-danger'
                      }`}>
                        {employee.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">View</button>
                      <button className="btn btn-sm btn-outline-secondary">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeRecords;