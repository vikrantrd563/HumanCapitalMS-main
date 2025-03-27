import { Link, useLocation } from 'react-router-dom';

function HRLayout({ children, onLogout }) {
  const location = useLocation();

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <h5 className="mb-4">HR Dashboard</h5>
          <nav className="nav flex-column">
            <Link 
              to="/hr/dashboard"
              className={`nav-link text-white ${location.pathname === '/hr/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/hr/employee-records"
              className={`nav-link text-white ${location.pathname === '/hr/employee-records' ? 'active' : ''}`}
            >
              Employee Records
            </Link>
            <Link 
              to="/hr/appraisals"
              className={`nav-link text-white ${location.pathname === '/hr/appraisals' ? 'active' : ''}`}
            >
              Appraisals
            </Link>
            <Link 
              to="/hr/training"
              className={`nav-link text-white ${location.pathname === '/hr/training' ? 'active' : ''}`}
            >
              Training
            </Link>
            <Link 
              to="/hr/recruitment"
              className={`nav-link text-white ${location.pathname === '/hr/recruitment' ? 'active' : ''}`}
            >
              Recruitment
            </Link>
            <Link 
              to="/hr/skill-matrix"
              className={`nav-link text-white ${location.pathname === '/hr/skill-matrix' ? 'active' : ''}`}
            >
              Skill Matrix
            </Link>
            <Link 
              to="/hr/reports"
              className={`nav-link text-white ${location.pathname === '/hr/reports' ? 'active' : ''}`}
            >
              Reports
            </Link>
            <Link 
              to="/hr/settings"
              className={`nav-link text-white ${location.pathname === '/hr/settings' ? 'active' : ''}`}
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
            <span className="navbar-brand">HCMS HR Portal</span>
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

export default HRLayout;