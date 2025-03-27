import { useState } from 'react';

function HRDashboard() {
  const [stats] = useState({
    totalEmployees: 150,
    onLeave: 5,
    pendingAppraisals: 10,
    completedAppraisals: 140,
    openPositions: 5,
    inProgress: 15
  });

  return (
    <div>
      <h2 className="mb-4">HR Dashboard</h2>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employee Overview</h5>
              <p className="card-text">
                Total Employees: {stats.totalEmployees}<br />
                On Leave: {stats.onLeave}
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Appraisal Summary</h5>
              <p className="card-text">
                Pending: {stats.pendingAppraisals}<br />
                Completed: {stats.completedAppraisals}
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recruitments</h5>
              <p className="card-text">
                Open Positions: {stats.openPositions}<br />
                In Progress: {stats.inProgress}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <h5 className="mb-0">Recent Activities</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Details</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employee Added</td>
                <td>John Doe (Developer)</td>
                <td>22-Dec-2024</td>
              </tr>
              <tr>
                <td>Appraisal Submitted</td>
                <td>Jane Smith (HR Manager)</td>
                <td>21-Dec-2024</td>
              </tr>
              <tr>
                <td>Training Scheduled</td>
                <td>React Training</td>
                <td>20-Dec-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;