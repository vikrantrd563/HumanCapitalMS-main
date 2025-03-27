import { useState } from 'react';

function AdminSettings() {
  const [settings, setSettings] = useState({
    systemName: 'HCMS Portal',
    maintenanceMode: false,
    backupFrequency: 'daily',
    retentionDays: 30,
    emailNotifications: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      <h2 className="mb-4">System Settings</h2>

      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-4">
              <h5>General Settings</h5>
              <div className="mb-3">
                <label htmlFor="systemName" className="form-label">System Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="systemName"
                  name="systemName"
                  value={settings.systemName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="maintenanceMode"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="maintenanceMode">
                  Maintenance Mode
                </label>
              </div>
            </div>

            <div className="mb-4">
              <h5>Backup Settings</h5>
              <div className="mb-3">
                <label htmlFor="backupFrequency" className="form-label">Backup Frequency</label>
                <select
                  className="form-select"
                  id="backupFrequency"
                  name="backupFrequency"
                  value={settings.backupFrequency}
                  onChange={handleChange}
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="retentionDays" className="form-label">Retention Period (Days)</label>
                <input
                  type="number"
                  className="form-control"
                  id="retentionDays"
                  name="retentionDays"
                  value={settings.retentionDays}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <h5>Notification Settings</h5>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="emailNotifications">
                  Email Notifications
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;