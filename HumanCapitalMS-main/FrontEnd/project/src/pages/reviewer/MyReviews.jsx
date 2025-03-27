import { useState } from 'react';

function MyReviews() {
  const [reviews] = useState({
    pending: [
      {
        id: 1,
        employeeName: 'John Doe',
        department: 'IT',
        type: 'Quarterly Review',
        dueDate: '2024-01-25'
      },
      {
        id: 2,
        employeeName: 'Jane Smith',
        department: 'IT',
        type: 'Performance Improvement',
        dueDate: '2024-01-30'
      }
    ],
    completed: [
      {
        id: 3,
        employeeName: 'Mike Wilson',
        department: 'IT',
        type: 'Quarterly Review',
        completionDate: '2024-01-15',
        rating: 4.5
      },
      {
        id: 4,
        employeeName: 'Sarah Brown',
        department: 'IT',
        type: 'Annual Review',
        completionDate: '2024-01-10',
        rating: 4.2
      }
    ]
  });

  return (
    <div>
      <h2 className="mb-4">My Reviews</h2>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Pending Reviews</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Review Type</th>
                  <th>Due Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.pending.map(review => (
                  <tr key={review.id}>
                    <td>{review.employeeName}</td>
                    <td>{review.department}</td>
                    <td>{review.type}</td>
                    <td>{review.dueDate}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2">
                        Start Review
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
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

      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Completed Reviews</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Review Type</th>
                  <th>Completion Date</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.completed.map(review => (
                  <tr key={review.id}>
                    <td>{review.employeeName}</td>
                    <td>{review.department}</td>
                    <td>{review.type}</td>
                    <td>{review.completionDate}</td>
                    <td>
                      <span className={`badge ${
                        review.rating >= 4.5 ? 'bg-success' :
                        review.rating >= 4.0 ? 'bg-primary' :
                        review.rating >= 3.0 ? 'bg-warning' :
                        'bg-danger'
                      }`}>
                        {review.rating}
                      </span>
                    </td>
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

export default MyReviews;