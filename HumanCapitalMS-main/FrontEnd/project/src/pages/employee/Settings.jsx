import { useState } from 'react';

function EmployeeSettings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      appraisalReminders: true,
      trainingUpdates: true,
      skillMatrixReminders: false
    },
    privacy: {
      showProfileToTeam: true,
      showSkillsToTeam: true,
      showTrainingHistory: true
    },
    preferences: {
      language: 'en',
      theme: 'light'
    }
  });

  const handleChange = (category, setting) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: !prev[category][setting]
      }
    }));
  };

  const handleSelectChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  return (
    <div>
      <h2 className="mb-4">Settings</h2>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Notification Preferences</h5>
        </div>
        <div className="card-body">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="emailNotifications"
              checked={settings.notifications.email}
              onChange={() => handleChange('notifications', 'email')}
            />
            <label className="form-check-label" htmlFor="emailNotifications">
              Email Notifications
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="appraisalReminders"
              checked={settings.notifications.appraisalReminders}
              onChange={() => handleChange('notifications', 'appraisalReminders')}
            />
            <label className="form-check-label" htmlFor="appraisalReminders">
              Appraisal Reminders
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="trainingUpdates"
              checked={settings.notifications.trainingUpdates}
              onChange={() => handleChange('notifications', 'trainingUpdates')}
            />
            <label className="form-check-label" htmlFor="trainingUpdates">
              Training Updates
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="skillMatrixReminders"
              checked={settings.notifications.skillMatrixReminders}
              onChange={() => handleChange('notifications', 'skillMatrixReminders')}
            />
            <label className="form-check-label" htmlFor="skillMatrixReminders">
              Skill Matrix Update Reminders
            </label>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Privacy Settings</h5>
        </div>
        <div className="card-body">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showProfileToTeam"
              checked={settings.privacy.showProfileToTeam}
              onChange={() => handleChange('privacy', 'showProfileToTeam')}
            />
            <label className="form-check-label" htmlFor="showProfileToTeam">
              Show Profile to Team Members
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showSkillsToTeam"
              checked={settings.privacy.showSkillsToTeam}
              onChange={() => handleChange('privacy', 'showSkillsToTeam')}
            />
            <label className="form-check-label" htmlFor="showSkillsToTeam">
              Show Skills to Team Members
            </label>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showTrainingHistory"
              checked={settings.privacy.showTrainingHistory}
              onChange={() => handleChange('privacy', 'showTrainingHistory')}
            />
            <label className="form-check-label" htmlFor="showTrainingHistory">
              Show Training History
            </label>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Preferences</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="language" className="form-label">Language</label>
            <select
              className="form-select"
              id="language"
              value={settings.preferences.language}
              onChange={(e) => handleSelectChange('preferences', 'language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="theme" className="form-label">Theme</label>
            <select
              className="form-select"
              id="theme"
              value={settings.preferences.theme}
              onChange={(e) => handleSelectChange('preferences', 'theme', e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>
      </div>

      <button className="btn btn-primary">
        Save Changes
      </button>
    </div>
  );
}

export default EmployeeSettings;