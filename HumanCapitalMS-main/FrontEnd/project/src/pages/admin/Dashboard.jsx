import { useState } from 'react';

function AdminDashboard() {
  const [stats] = useState({
    totalUsers: 150,
    activeUsers: 130,
    pendingApprovals: 5,
    systemStatus: 'Operational'
  });

  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>
      
      <div className="row">
        {/* Stats Cards */}
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <h2 className="card-text">{stats.totalUsers}</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Active Users</h5>
              <h2 className="card-text">{stats.activeUsers}</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pending Approvals</h5>
              <h2 className="card-text">{stats.pendingApprovals}</h2>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">System Status</h5>
              <h2 className="card-text text-success">{stats.systemStatus}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="card mt-4">
        <div className="card-header">
          <h5 className="mb-0">Recent Activity</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Profile Update</td>
                <td>2024-01-20</td>
                <td><span className="badge bg-success">Completed</span></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>New Registration</td>
                <td>2024-01-19</td>
                <td><span className="badge bg-warning">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;