import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Auth Components
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';

// Layout Components
import AdminLayout from './layouts/AdminLayout';
import HRLayout from './layouts/HRLayout';
import EmployeeLayout from './layouts/EmployeeLayout';
import ReviewerLayout from './layouts/ReviewerLayout';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import SystemMonitoring from './pages/admin/SystemMonitoring';
import UserManagement from './pages/admin/UserManagement';
import AdminReports from './pages/admin/Reports';
import AdminSettings from './pages/admin/Settings';

// HR Pages
import HRDashboard from './pages/hr/Dashboard';
import EmployeeRecords from './pages/hr/EmployeeRecords';
import HRAppraisals from './pages/hr/Appraisals';
import Training from './pages/hr/Training';
import Recruitment from './pages/hr/Recruitment';
import SkillMatrix from './pages/hr/SkillMatrix';
import HRReports from './pages/hr/Reports';
import HRSettings from './pages/hr/Settings';

// Employee Pages
import EmployeeDashboard from './pages/employee/Dashboard';
import MyProfile from './pages/employee/MyProfile';
import EmployeeAppraisals from './pages/employee/Appraisals';
import EmployeeTrainings from './pages/employee/Trainings';
import EmployeeSkillMatrix from './pages/employee/SkillMatrix';
import EmployeeSettings from './pages/employee/Settings';

// Reviewer Pages
import ReviewerDashboard from './pages/reviewer/Dashboard';
import MyReviews from './pages/reviewer/MyReviews';
import PendingAppraisals from './pages/reviewer/PendingAppraisals';
import TeamPerformance from './pages/reviewer/TeamPerformance';
import ReviewerReports from './pages/reviewer/Reports';
import ReviewerSettings from './pages/reviewer/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (credentials) => {
    // Temporary authentication logic
    if (credentials.username && credentials.password) {
      setIsAuthenticated(true);
      // Set role based on username for demo
      setUserRole(credentials.username.toLowerCase());
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={
          !isAuthenticated ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Navigate to={`/${userRole}/dashboard`} />
          )
        } />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={
          isAuthenticated && userRole === 'admin' ? (
            <AdminLayout onLogout={handleLogout}>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="system-monitoring" element={<SystemMonitoring />} />
                <Route path="user-management" element={<UserManagement />} />
                <Route path="reports" element={<AdminReports />} />
                <Route path="settings" element={<AdminSettings />} />
              </Routes>
            </AdminLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />

        {/* HR Routes */}
        <Route path="/hr/*" element={
          isAuthenticated && userRole === 'hr' ? (
            <HRLayout onLogout={handleLogout}>
              <Routes>
                <Route path="dashboard" element={<HRDashboard />} />
                <Route path="employee-records" element={<EmployeeRecords />} />
                <Route path="appraisals" element={<HRAppraisals />} />
                <Route path="training" element={<Training />} />
                <Route path="recruitment" element={<Recruitment />} />
                <Route path="skill-matrix" element={<SkillMatrix />} />
                <Route path="reports" element={<HRReports />} />
                <Route path="settings" element={<HRSettings />} />
              </Routes>
            </HRLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />

        {/* Employee Routes */}
        <Route path="/employee/*" element={
          isAuthenticated && userRole === 'employee' ? (
            <EmployeeLayout onLogout={handleLogout}>
              <Routes>
                <Route path="dashboard" element={<EmployeeDashboard />} />
                <Route path="profile" element={<MyProfile />} />
                <Route path="appraisals" element={<EmployeeAppraisals />} />
                <Route path="trainings" element={<EmployeeTrainings />} />
                <Route path="skill-matrix" element={<EmployeeSkillMatrix />} />
                <Route path="settings" element={<EmployeeSettings />} />
              </Routes>
            </EmployeeLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />

        {/* Reviewer Routes */}
        <Route path="/reviewer/*" element={
          isAuthenticated && userRole === 'reviewer' ? (
            <ReviewerLayout onLogout={handleLogout}>
              <Routes>
                <Route path="dashboard" element={<ReviewerDashboard />} />
                <Route path="my-reviews" element={<MyReviews />} />
                <Route path="pending-appraisals" element={<PendingAppraisals />} />
                <Route path="team-performance" element={<TeamPerformance />} />
                <Route path="reports" element={<ReviewerReports />} />
                <Route path="settings" element={<ReviewerSettings />} />
              </Routes>
            </ReviewerLayout>
          ) : (
            <Navigate to="/login" />
          )
        } />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;