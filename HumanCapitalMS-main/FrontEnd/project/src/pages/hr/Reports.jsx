import { useState } from 'react';

function HRReports() {
  const [selectedReport, setSelectedReport] = useState('employee');
  
  return (
    <div>
      <h2 className="mb-4">HR Reports</h2>

      <div className="row mb-4">
        <div className="col-md-3">
          <select 
            className="form-select"
            value={selectedReport}
            onChange={(e) => setSelectedReport(e.target.value)}
          >
            <option value="employee">Employee Report</option>
            <option value="appraisal">Appraisal Report</option>
            <option value="training">Training Report</option>
            <option value="recruitment">Recruitment Report</option>
          </select>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              {selectedReport === 'employee' && 'Employee Report'}
              {selectedReport === 'appraisal' && 'Appraisal Report'}
              {selectedReport === 'training' && 'Training Report'}
              {selectedReport === 'recruitment' && 'Recruitment Report'}
            </h5>
            <button className="btn btn-primary btn-sm">
              Export Report
            </button>
          </div>
        </div>
        <div className="card-body">
          {selectedReport === 'employee' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Total Employees</th>
                  <th>Active</th>
                  <th>On Leave</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IT</td>
                  <td>50</td>
                  <td>45</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>HR</td>
                  <td>20</td>
                  <td>18</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'appraisal' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Completed</th>
                  <th>Pending</th>
                  <th>Overdue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IT</td>
                  <td>40</td>
                  <td>8</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>HR</td>
                  <td>15</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'training' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Training</th>
                  <th>Participants</th>
                  <th>Completed</th>
                  <th>Success Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React Development</td>
                  <td>25</td>
                  <td>20</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>Leadership Skills</td>
                  <td>15</td>
                  <td>15</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          )}

          {selectedReport === 'recruitment' && (
            <table className="table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Applications</th>
                  <th>Interviews</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Senior Developer</td>
                  <td>45</td>
                  <td>10</td>
                  <td>In Progress</td>
                </tr>
                <tr>
                  <td>HR Manager</td>
                  <td>30</td>
                  <td>5</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default HRReports;