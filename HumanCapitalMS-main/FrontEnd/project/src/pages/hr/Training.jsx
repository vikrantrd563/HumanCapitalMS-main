import { useState } from 'react';

function Training() {
  const [trainings] = useState([
    {
      id: 1,
      title: 'React Development',
      trainer: 'John Smith',
      startDate: '2024-02-01',
      endDate: '2024-02-05',
      participants: 15,
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Leadership Skills',
      trainer: 'Mary Johnson',
      startDate: '2024-01-15',
      endDate: '2024-01-16',
      participants: 20,
      status: 'Completed'
    }
  ]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Training Management</h2>
        <button className="btn btn-primary">
          Schedule New Training
        </button>
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Upcoming Trainings</h5>
              <h2 className="card-text">5</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ongoing Trainings</h5>
              <h2 className="card-text">2</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Completed Trainings</h5>
              <h2 className="card-text">12</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Trainer</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trainings.map(training => (
                  <tr key={training.id}>
                    <td>{training.id}</td>
                    <td>{training.title}</td>
                    <td>{training.trainer}</td>
                    <td>{training.startDate}</td>
                    <td>{training.endDate}</td>
                    <td>{training.participants}</td>
                    <td>
                      <span className={`badge ${
                        training.status === 'Completed' ? 'bg-success' :
                        training.status === 'Ongoing' ? 'bg-warning' :
                        'bg-primary'
                      }`}>
                        {training.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">View</button>
                      <button className="btn btn-sm btn-outline-secondary me-2">Edit</button>
                      <button className="btn btn-sm btn-outline-danger">Cancel</button>
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

export default Training;