import { useState } from 'react';

function AdminReports() {
  const [selectedReport, setSelectedReport] = useState('system');
  
  return (
    <div>
      <h2 className="mb-4">Reports</h2>

      <div className="row mb-4">
        <div className="col-md-3">
          <select 
            className="form-select"
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
          >
            <option value="system">System Usage Report</option>
            <option value="user">User Activity Report</option>
            <option value="security">Security Audit Report</option>
          </select>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              {selectedReport === 'system' && 'System Usage Report'}
              {selectedReport === 'user' && 'User Activity Report'}
              {selectedReport === 'security' && 'Security Audit Report'}
            </h5>
            <button className="btn btn-primary btn-sm">
              Export Report
            </button>
          </div>
        </div>
        <div className="card-body">
          {selectedReport === 'system' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average CPU Usage</td>
                  <td>45%</td>
                  <td className="text-success">↑ 2%</td>
                </tr>
                <tr>
                  <td>Average Memory Usage</td>
                  <td>60%</td>
                  <td className="text-danger">↓ 5%</td>
                </tr>
                <tr>
                  <td>Peak Active Users</td>
                  <td>150</td>
                  <td className="text-success">↑ 10</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'user' && (
            <table className="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Last Active</th>
                  <th>Actions Performed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>2024-01-20 14:30</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>2024-01-20 15:45</td>
                  <td>18</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'security' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Failed Login Attempt</td>
                  <td>2024-01-20 13:15</td>
                  <td><span className="badge bg-warning">Warning</span></td>
                </tr>
                <tr>
                  <td>Password Reset</td>
                  <td>2024-01-20 14:20</td>
                  <td><span className="badge bg-success">Success</span></td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminReports;