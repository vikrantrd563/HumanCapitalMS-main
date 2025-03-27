import { useState } from 'react';

function TeamPerformance() {
  const [teamStats] = useState({
    overview: {
      totalMembers: 8,
      averagePerformance: 4.2,
      topPerformers: 3,
      needsImprovement: 1
    },
    members: [
      {
        id: 1,
        name: 'John Doe',
        position: 'Senior Developer',
        performance: 4.5,
        lastReview: '2024-01-15',
        status: 'Excellent'
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Developer',
        performance: 4.0,
        lastReview: '2024-01-10',
        status: 'Good'
      },
      {
        id: 3,
        name: 'Mike Wilson',
        position: 'Junior Developer',
        performance: 3.5,
        lastReview: '2024-01-05',
        status: 'Satisfactory'
      }
    ]
  });

  return (
    <div>
      <h2 className="mb-4">Team Performance</h2>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Team Members</h5>
              <h2 className="card-text">{teamStats.overview.totalMembers}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Avg Performance</h5>
              <h2 className="card-text">{teamStats.overview.averagePerformance}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top Performers</h5>
              <h2 className="card-text">{teamStats.overview.topPerformers}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Needs Improvement</h5>
              <h2 className="card-text">{teamStats.overview.needsImprovement}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Team Members Performance</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Performance Score</th>
                  <th>Last Review</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamStats.members.map(member => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.position}</td>
                    <td>
                      <div className="progress">
                        <div
                          className={`progress-bar ${
                            member.performance >= 4.5 ? 'bg-success' :
                            member.performance >= 4.0 ? 'bg-primary' :
                            member.performance >= 3.5 ? 'bg-info' :
                            'bg-warning'
                          }`}
                          role="progressbar"
                          style={{ width: `${(member.performance / 5) * 100}%` }}
                          aria-valuenow={member.performance}
                          aria-valuemin="0"
                          aria-valuemax="5"
                        >
                          {member.performance}
                        </div>
                      </div>
                    </td>
                    <td>{member.lastReview}</td>
                    <td>
                      <span className={`badge ${
                        member.status === 'Excellent' ? 'bg-success' :
                        member.status === 'Good' ? 'bg-primary' :
                        member.status === 'Satisfactory' ? 'bg-info' :
                        'bg-warning'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View Details
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        Schedule Review
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

export default TeamPerformance;