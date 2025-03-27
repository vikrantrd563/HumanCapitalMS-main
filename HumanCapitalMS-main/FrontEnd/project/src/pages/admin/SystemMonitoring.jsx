import { useState } from 'react';

function SystemMonitoring() {
  const [systemMetrics] = useState({
    cpuUsage: '45%',
    memoryUsage: '60%',
    diskSpace: '75%',
    activeUsers: 89,
    serverStatus: 'Operational',
    lastBackup: '2024-01-20 03:00 AM'
  });

  return (
    <div>
      <h2 className="mb-4">System Monitoring</h2>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CPU Usage</h5>
              <div className="progress mb-2">
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: systemMetrics.cpuUsage }}
                  aria-valuenow={45} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                >
                  {systemMetrics.cpuUsage}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Memory Usage</h5>
              <div className="progress mb-2">
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: systemMetrics.memoryUsage }}
                  aria-valuenow={60} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                >
                  {systemMetrics.memoryUsage}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Disk Space</h5>
              <div className="progress mb-2">
                <div 
                  className="progress-bar" 
                  role="progressbar" 
                  style={{ width: systemMetrics.diskSpace }}
                  aria-valuenow={75} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                >
                  {systemMetrics.diskSpace}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">System Status</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Server Status</th>
                    <td>
                      <span className="badge bg-success">
                        {systemMetrics.serverStatus}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>Active Users</th>
                    <td>{systemMetrics.activeUsers}</td>
                  </tr>
                  <tr>
                    <th>Last Backup</th>
                    <td>{systemMetrics.lastBackup}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">System Logs</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">System Backup Completed</h6>
                    <small>3 hours ago</small>
                  </div>
                  <p className="mb-1">Daily backup completed successfully</p>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-1">High CPU Usage Alert</h6>
                    <small>5 hours ago</small>
                  </div>
                  <p className="mb-1">CPU usage peaked at 85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemMonitoring;