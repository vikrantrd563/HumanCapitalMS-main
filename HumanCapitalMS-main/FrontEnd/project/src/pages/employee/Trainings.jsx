import { useState } from 'react';

function EmployeeTrainings() {
  const [trainings] = useState({
    upcoming: [
      {
        id: 1,
        title: 'Advanced React Patterns',
        trainer: 'John Smith',
        date: '2024-02-15',
        duration: '2 days',
        status: 'Scheduled'
      }
    ],
    completed: [
      {
        id: 2,
        title: 'JavaScript Fundamentals',
        trainer: 'Sarah Wilson',
        date: '2024-01-10',
        duration: '3 days',
        status: 'Completed',
        score: 92
      },
      {
        id: 3,
        title: 'Git Workshop',
        trainer: 'Mike Johnson',
        date: '2023-12-20',
        duration: '1 day',
        status: 'Completed',
        score: 88
      }
    ]
  });

  return (
    <div>
      <h2 className="mb-4">My Trainings</h2>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Upcoming Trainings</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Training</th>
                  <th>Trainer</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainings.upcoming.map(training => (
                  <tr key={training.id}>
                    <td>{training.title}</td>
                    <td>{training.trainer}</td>
                    <td>{training.date}</td>
                    <td>{training.duration}</td>
                    <td>
                      <span className="badge bg-primary">
                        {training.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View Details
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Completed Trainings</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Training</th>
                  <th>Trainer</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Score</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainings.completed.map(training => (
                  <tr key={training.id}>
                    <td>{training.title}</td>
                    <td>{training.trainer}</td>
                    <td>{training.date}</td>
                    <td>{training.duration}</td>
                    <td>
                      <span className={`badge ${
                        training.score >= 90 ? 'bg-success' :
                        training.score >= 75 ? 'bg-primary' :
                        'bg-warning'
                      }`}>
                        {training.score}%
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View Certificate
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        Feedback
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

export default EmployeeTrainings;