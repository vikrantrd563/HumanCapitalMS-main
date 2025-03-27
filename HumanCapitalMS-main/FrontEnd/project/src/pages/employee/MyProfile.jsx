import { useState } from 'react';

function MyProfile() {
  const [profile, setProfile] = useState({
    personalInfo: {
      name: 'John Doe',
      email: 'john.doe@company.com',
      phone: '+1234567890',
      department: 'IT',
      position: 'Senior Developer',
      joinDate: '2023-01-15'
    },
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Python', level: 'Beginner' }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'Tech University',
        year: '2020'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        year: '2022'
      }
    ]
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Profile</h2>
        <button className="btn btn-primary">
          Edit Profile
        </button>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Personal Information</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{profile.personalInfo.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{profile.personalInfo.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{profile.personalInfo.phone}</td>
                  </tr>
                  <tr>
                    <th>Department</th>
                    <td>{profile.personalInfo.department}</td>
                  </tr>
                  <tr>
                    <th>Position</th>
                    <td>{profile.personalInfo.position}</td>
                  </tr>
                  <tr>
                    <th>Join Date</th>
                    <td>{profile.personalInfo.joinDate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Skills</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.skills.map((skill, index) => (
                    <tr key={index}>
                      <td>{skill.name}</td>
                      <td>{skill.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Education</h5>
            </div>
            <div className="card-body">
              {profile.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h6>{edu.degree}</h6>
                  <p className="mb-1">{edu.institution}</p>
                  <small className="text-muted">Year: {edu.year}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Certifications</h5>
            </div>
            <div className="card-body">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="mb-3">
                  <h6>{cert.name}</h6>
                  <p className="mb-1">{cert.issuer}</p>
                  <small className="text-muted">Year: {cert.year}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;