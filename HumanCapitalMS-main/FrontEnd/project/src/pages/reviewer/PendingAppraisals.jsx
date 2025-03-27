import { useState } from 'react';

function PendingAppraisals() {
  const [appraisals] = useState([
    {
      id: 1,
      employeeName: 'John Doe',
      department: 'IT',
      position: 'Senior Developer',
      submissionDate: '2024-01-15',
      dueDate: '2024-01-25',
      status: 'Pending Review'
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      department: 'IT',
      position: 'Developer',
      submissionDate: '2024-01-18',
      dueDate: '2024-01-30',
      status: 'In Progress'
    }
  ]);

  return (
    <div>
      <h2 className="mb-4">Pending Appraisals</h2>

      <div className="card">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name..."
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
                <option value="Pending Review">Pending Review</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Submission Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appraisals.map(appraisal => (
                  <tr key={appraisal.id}>
                    <td>{appraisal.employeeName}</td>
                    <td>{appraisal.department}</td>
                    <td>{appraisal.position}</td>
                    <td>{appraisal.submissionDate}</td>
                    <td>{appraisal.dueDate}</td>
                    <td>
                      <span className={`badge ${
                        appraisal.status === 'Pending Review' ? 'bg-warning' :
                        'bg-primary'
                      }`}>
                        {appraisal.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        Review
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        View Details
                      </button>
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

export default PendingAppraisals;