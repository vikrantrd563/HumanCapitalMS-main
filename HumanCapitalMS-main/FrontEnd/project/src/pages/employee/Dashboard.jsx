import { useState } from 'react';

function EmployeeDashboard() {
  const [stats] = useState({
    attendance: '95%',
    daysAbsent: 2,
    upcomingTrainings: [
      { title: 'React Workshop', date: '2024-01-25' },
      { title: 'Leadership Seminar', date: '2024-01-28' }
    ],
    recentActivities: [
      { type: 'Appraisal', details: 'Self-Appraisal Form', date: '2024-01-20' },
      { type: 'Training', details: 'Completed React Basics', date: '2024-01-18' }
    ]
  });

  return (
    <div>
      <h2 className="mb-4">Employee Dashboard</h2>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Attendance Overview</h5>
              <p className="card-text">
                This Month: {stats.attendance}<br />
                Days Absent: {stats.daysAbsent}
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Upcoming Trainings</h5>
              <ul className="list-unstyled">
                {stats.upcomingTrainings.map((training, index) => (
                  <li key={index}>
                    {training.title} - {training.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quick Actions</h5>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary">View Appraisal</button>
                <button className="btn btn-outline-primary">Request Leave</button>
              </div>
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
                <th>Type</th>
                <th>Details</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentActivities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.type}</td>
                  <td>{activity.details}</td>
                  <td>{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;