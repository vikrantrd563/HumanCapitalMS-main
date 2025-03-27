import { useState } from 'react';

function ReviewerReports() {
  const [selectedReport, setSelectedReport] = useState('team');
  
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
            <option value="team">Team Performance Report</option>
            <option value="individual">Individual Performance Report</option>
            <option value="appraisal">Appraisal Summary Report</option>
          </select>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              {selectedReport === 'team' && 'Team Performance Report'}
              {selectedReport === 'individual' && 'Individual Performance Report'}
              {selectedReport === 'appraisal' && 'Appraisal Summary Report'}
            </h5>
            <button className="btn btn-primary btn-sm">
              Export Report
            </button>
          </div>
        </div>
        <div className="card-body">
          {selectedReport === 'team' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Previous</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Average Performance Score</td>
                  <td>4.2</td>
                  <td>4.0</td>
                  <td className="text-success">↑ 0.2</td>
                </tr>
                <tr>
                  <td>Top Performers</td>
                  <td>3</td>
                  <td>2</td>
                  <td className="text-success">↑ 1</td>
                </tr>
                <tr>
                  <td>Improvement Needed</td>
                  <td>1</td>
                  <td>2</td>
                  <td className="text-success">↓ 1</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'individual' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Current Score</th>
                  <th>Previous Score</th>
                  <th>Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>4.5</td>
                  <td>4.2</td>
                  <td className="text-success">+0.3</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>4.0</td>
                  <td>3.8</td>
                  <td className="text-success">+0.2</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'appraisal' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Completed</th>
                  <th>Pending</th>
                  <th>Overdue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quarterly Reviews</td>
                  <td>6</td>
                  <td>2</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Annual Reviews</td>
                  <td>8</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewerReports;