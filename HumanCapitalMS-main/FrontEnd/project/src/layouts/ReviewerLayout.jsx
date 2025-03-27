import { Link, useLocation } from 'react-router-dom';

function ReviewerLayout({ children, onLogout }) {
  const location = useLocation();

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <h5 className="mb-4">Reviewer Portal</h5>
          <nav className="nav flex-column">
            <Link 
              to="/reviewer/dashboard"
              className={`nav-link text-white ${location.pathname === '/reviewer/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/reviewer/my-reviews"
              className={`nav-link text-white ${location.pathname === '/reviewer/my-reviews' ? 'active' : ''}`}
            >
              My Reviews
            </Link>
            <Link 
              to="/reviewer/pending-appraisals"
              className={`nav-link text-white ${location.pathname === '/reviewer/pending-appraisals' ? 'active' : ''}`}
            >
              Pending Appraisals
            </Link>
            <Link 
              to="/reviewer/team-performance"
              className={`nav-link text-white ${location.pathname === '/reviewer/team-performance' ? 'active' : ''}`}
            >
              Team Performance
            </Link>
            <Link 
              to="/reviewer/reports"
              className={`nav-link text-white ${location.pathname === '/reviewer/reports' ? 'active' : ''}`}
            >
              Reports
            </Link>
            <Link 
              to="/reviewer/settings"
              className={`nav-link text-white ${location.pathname === '/reviewer/settings' ? 'active' : ''}`}
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
            <span className="navbar-brand">HCMS Reviewer Portal</span>
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

export default ReviewerLayout;