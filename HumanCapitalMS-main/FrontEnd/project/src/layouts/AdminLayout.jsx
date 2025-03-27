import { Link, useLocation } from 'react-router-dom';

function AdminLayout({ children, onLogout }) {
  const location = useLocation();

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <h5 className="mb-4">Admin Dashboard</h5>
          <nav className="nav flex-column">
            <Link 
              to="/admin/dashboard"
              className={`nav-link text-white ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/admin/system-monitoring"
              className={`nav-link text-white ${location.pathname === '/admin/system-monitoring' ? 'active' : ''}`}
            >
              System Monitoring
            </Link>
            <Link 
              to="/admin/user-management"
              className={`nav-link text-white ${location.pathname === '/admin/user-management' ? 'active' : ''}`}
            >
              User Management
            </Link>
            <Link 
              to="/admin/reports"
              className={`nav-link text-white ${location.pathname === '/admin/reports' ? 'active' : ''}`}
            >
              Reports
            </Link>
            <Link 
              to="/admin/settings"
              className={`nav-link text-white ${location.pathname === '/admin/settings' ? 'active' : ''}`}
            >
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid">
            <span className="navbar-brand">HCMS Admin</span>
            <button onClick={onLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;