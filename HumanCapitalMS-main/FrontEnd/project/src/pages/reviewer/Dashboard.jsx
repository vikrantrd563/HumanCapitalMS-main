import { useState } from 'react';

function ReviewerDashboard() {
  const [stats] = useState({
    pendingAppraisals: 3,
    completedAppraisals: 12,
    teamMembers: 8,
    upcomingDeadlines: [
      { task: 'Team Performance Review', date: '2024-01-25' },
      { task: 'Quarterly Appraisals', date: '2024-03-31' }
    ],
    recentActivities: [
      { type: 'Appraisal Review', employee: 'John Doe', date: '2024-01-20' },
      { type: 'Performance Update', employee: 'Jane Smith', date: '2024-01-18' }
    ]
  });

  return (
    <div>
      <h2 className="mb-4">Reviewer Dashboard</h2>
      
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pending Appraisals</h5>
              <h2 className="card-text">{stats.pendingAppraisals}</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Completed Appraisals</h5>
              <h2 className="card-text">{stats.completedAppraisals}</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Team Members</h5>
              <h2 className="card-text">{stats.teamMembers}</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <button className="btn btn-outline-primary w-100 mb-2">
                Review Appraisal
              </button>
              <button className="btn btn-outline-primary w-100">
                Team Overview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Upcoming Deadlines</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.upcomingDeadlines.map((deadline, index) => (
                    <tr key={index}>
                      <td>{deadline.task}</td>
                      <td>{deadline.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Recent Activities</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Employee</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentActivities.map((activity, index) => (
                    <tr key={index}>
                      <td>{activity.type}</td>
                      <td>{activity.employee}</td>
                      <td>{activity.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewerDashboard;