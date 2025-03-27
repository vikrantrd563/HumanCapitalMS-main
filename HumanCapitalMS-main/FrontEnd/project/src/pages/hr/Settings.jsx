import { useState } from 'react';

function HRSettings() {
  const [settings, setSettings] = useState({
    notifyNewEmployee: true,
    notifyAppraisalDeadline: true,
    notifyTrainingSchedule: true,
    defaultAppraisalCycle: 'annual',
    defaultProbationPeriod: '3',
    autoArchiveInactiveProfiles: false
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
      <h2 className="mb-4">HR Settings</h2>

      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-4">
              <h5>Notification Settings</h5>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifyNewEmployee"
                  name="notifyNewEmployee"
                  checked={settings.notifyNewEmployee}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="notifyNewEmployee">
                  Notify when new employee is added
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifyAppraisalDeadline"
                  name="notifyAppraisalDeadline"
                  checked={settings.notifyAppraisalDeadline}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="notifyAppraisalDeadline">
                  Notify for appraisal deadlines
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifyTrainingSchedule"
                  name="notifyTrainingSchedule"
                  checked={settings.notifyTrainingSchedule}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="notifyTrainingSchedule">
                  Notify for training schedules
                </label>
              </div>
            </div>

            <div className="mb-4">
              <h5>Employee Settings</h5>
              <div className="mb-3">
                <label htmlFor="defaultAppraisalCycle" className="form-label">Default Appraisal Cycle</label>
                <select
                  className="form-select"
                  id="defaultAppraisalCycle"
                  name="defaultAppraisalCycle"
                  value={settings.defaultAppraisalCycle}
                  onChange={handleChange}
                >
                  <option value="quarterly">Quarterly</option>
                  <option value="semi-annual">Semi-Annual</option>
                  <option value="annual">Annual</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="defaultProbationPeriod" className="form-label">Default Probation Period (months)</label>
                <select
                  className="form-select"
                  id="defaultProbationPeriod"
                  name="defaultProbationPeriod"
                  value={settings.defaultProbationPeriod}
                  onChange={handleChange}
                >
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <h5>Data Management</h5>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="autoArchiveInactiveProfiles"
                  name="autoArchiveInactiveProfiles"
                  checked={settings.autoArchiveInactiveProfiles}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="autoArchiveInactiveProfiles">
                  Automatically archive inactive employee profiles
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

export default HRSettings;