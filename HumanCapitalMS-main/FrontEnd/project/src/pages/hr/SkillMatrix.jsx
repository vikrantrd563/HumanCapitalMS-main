import { useState } from 'react';
import { Card, Table, Form, Button, Row, Col } from 'react-bootstrap';
import { FaSearch, FaDownload } from 'react-icons/fa';

function SkillMatrix() {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('all');
  const [employees] = useState([
    {
      id: 1,
      name: 'John Doe',
      department: 'IT',
      skills: {
        react: 5,
        node: 4,
        python: 3,
        management: 2
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'HR',
      skills: {
        react: 2,
        node: 1,
        python: 1,
        management: 5
      }
    },
    {
      id: 3,
      name: 'Mike Wilson',
      department: 'Finance',
      skills: {
        react: 1,
        node: 1,
        python: 4,
        management: 3
      }
    }
  ]);

  const renderSkillLevel = (level) => {
    const maxStars = 5;
    return '★'.repeat(level) + '☆'.repeat(maxStars - level);
  };

  return (
    <div>
      <h2 className="mb-4">Skill Matrix</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Skills Tracked</Card.Title>
              <h3>25</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Employees Assessed</Card.Title>
              <h3>150</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Skill Updates This Month</Card.Title>
              <h3>45</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex gap-3">
              <Form.Group style={{ width: '300px' }}>
                <Form.Control
                  type="text"
                  placeholder="Search employees..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Form.Group>
              <Form.Group style={{ width: '200px' }}>
                <Form.Select value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="all">All Departments</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                  <option value="finance">Finance</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Button variant="primary">
              <FaDownload className="me-2" />
              Export Matrix
            </Button>
          </div>

          <Table responsive>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>React</th>
                <th>Node.js</th>
                <th>Python</th>
                <th>Management</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td className="text-warning">{renderSkillLevel(employee.skills.react)}</td>
                  <td className="text-warning">{renderSkillLevel(employee.skills.node)}</td>
                  <td className="text-warning">{renderSkillLevel(employee.skills.python)}</td>
                  <td className="text-warning">{renderSkillLevel(employee.skills.management)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Skill Level Legend</Card.Title>
          <div className="d-flex gap-4 mt-3">
            <div>
              <strong>1 ★☆☆☆☆</strong> - Beginner
            </div>
            <div>
              <strong>2 ★★☆☆☆</strong> - Elementary
            </div>
            <div>
              <strong>3 ★★★☆☆</strong> - Intermediate
            </div>
            <div>
              <strong>4 ★★★★☆</strong> - Advanced
            </div>
            <div>
              <strong>5 ★★★★★</strong> - Expert
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SkillMatrix;