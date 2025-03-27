import { useState } from 'react';

function EmployeeSkillMatrix() {
  const [skills] = useState({
    technical: [
      { name: 'React', level: 4, lastUpdated: '2024-01-15' },
      { name: 'JavaScript', level: 4, lastUpdated: '2024-01-15' },
      { name: 'Node.js', level: 3, lastUpdated: '2024-01-10' },
      { name: 'Python', level: 2, lastUpdated: '2023-12-20' }
    ],
    soft: [
      { name: 'Communication', level: 4, lastUpdated: '2024-01-15' },
      { name: 'Team Leadership', level: 3, lastUpdated: '2024-01-15' },
      { name: 'Problem Solving', level: 4, lastUpdated: '2024-01-10' }
    ]
  });

  const getLevelLabel = (level) => {
    switch (level) {
      case 1: return 'Beginner';
      case 2: return 'Intermediate';
      case 3: return 'Advanced';
      case 4: return 'Expert';
      default: return 'N/A';
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Skill Matrix</h2>
        <button className="btn btn-primary">
          Update Skills
        </button>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Technical Skills</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Proficiency Level</th>
                  <th>Progress</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {skills.technical.map((skill, index) => (
                  <tr key={index}>
                    <td>{skill.name}</td>
                    <td>{getLevelLabel(skill.level)}</td>
                    <td>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${(skill.level / 4) * 100}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="4"
                        >
                          {skill.level}/4
                        </div>
                      </div>
                    </td>
                    <td>{skill.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">Soft Skills</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Proficiency Level</th>
                  <th>Progress</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {skills.soft.map((skill, index) => (
                  <tr key={index}>
                    <td>{skill.name}</td>
                    <td>{getLevelLabel(skill.level)}</td>
                    <td>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${(skill.level / 4) * 100}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="4"
                        >
                          {skill.level}/4
                        </div>
                      </div>
                    </td>
                    <td>{skill.lastUpdated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSkillMatrix;