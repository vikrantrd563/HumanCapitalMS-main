import { useState } from 'react';

function EmployeeAppraisals() {
  const [appraisals] = useState({
    current: {
      period: '2024 Q1',
      status: 'In Progress',
      reviewer: 'Jane Smith',
      dueDate: '2024-03-31'
    },
    history: [
      {
        period: '2023 Q4',
        rating: 4.5,
        reviewer: 'Jane Smith',
        status: 'Completed',
        date: '2023-12-31'
      },
      {
        period: '2023 Q3',
        rating: 4.2,
        reviewer: 'Jane Smith',
        status: 'Completed',
        date: '2023-09-30'
      }
    ]
  });

  return (
    <div>
      <h2 className="mb-4">My Appraisals</h2>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Current Appraisal</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <p className="mb-1">Period</p>
              <h6>{appraisals.current.period}</h6>
            </div>
            <div className="col-md-3">
              <p className="mb-1">Status</p>
              <h6>
                <span className="badge bg-primary">
                  {appraisals.current.status}
                </span>
              </h6>
            </div>
            <div className="col-md-3">
              <p className="mb-1">Reviewer</p>
              <h6>{appraisals.current.reviewer}</h6>
            </div>
            <div className="col-md-3">
              <p className="mb-1">Due Date</p>
              <h6>{appraisals.current.dueDate}</h6>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-primary">
              Fill Appraisal Form
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Appraisal History</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Rating</th>
                  <th>Reviewer</th>
                  <th>Status</th>
                  <th>Completion Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appraisals.history.map((appraisal, index) => (
                  <tr key={index}>
                    <td>{appraisal.period}</td>
                    <td>{appraisal.rating}</td>
                    <td>{appraisal.reviewer}</td>
                    <td>
                      <span className="badge bg-success">
                        {appraisal.status}
                      </span>
                    </td>
                    <td>{appraisal.date}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">
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

export default EmployeeAppraisals;