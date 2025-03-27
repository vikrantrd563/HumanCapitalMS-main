import { Link, useLocation } from 'react-router-dom';

function EmployeeLayout({ children, onLogout }) {
  const location = useLocation();

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <h5 className="mb-4">Employee Portal</h5>
          <nav className="nav flex-column">
            <Link 
              to="/employee/dashboard"
              className={`nav-link text-white ${location.pathname === '/employee/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/employee/profile"
              className={`nav-link text-white ${location.pathname === '/employee/profile' ? 'active' : ''}`}
            >
              My Profile
            </Link>
            <Link 
              to="/employee/appraisals"
              className={`nav-link text-white ${location.pathname === '/employee/appraisals' ? 'active' : ''}`}
            >
              Appraisals
            </Link>
            <Link 
              to="/employee/trainings"
              className={`nav-link text-white ${location.pathname === '/employee/trainings' ? 'active' : ''}`}
            >
              Trainings
            </Link>
            <Link 
              to="/employee/skill-matrix"
              className={`nav-link text-white ${location.pathname === '/employee/skill-matrix' ? 'active' : ''}`}
            >
              Skill Matrix
            </Link>
            <Link 
              to="/employee/settings"
              className={`nav-link text-white ${location.pathname === '/employee/settings' ? 'active' : ''}`}
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
            <span className="navbar-brand">HCMS Employee Portal</span>
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

export default EmployeeLayout;