import { useState } from 'react';
import { Card, Table, Form, Button, Modal, Row, Col, Badge } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaUserPlus } from 'react-icons/fa';

function Recruitment() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [vacancies] = useState([
    {
      id: 1,
      position: 'Senior React Developer',
      department: 'IT',
      openings: 2,
      applications: 15,
      status: 'Open',
      deadline: '2024-02-28'
    },
    {
      id: 2,
      position: 'HR Manager',
      department: 'HR',
      openings: 1,
      applications: 8,
      status: 'In Progress',
      deadline: '2024-02-15'
    },
    {
      id: 3,
      position: 'Financial Analyst',
      department: 'Finance',
      openings: 3,
      applications: 20,
      status: 'Open',
      deadline: '2024-03-10'
    }
  ]);

  return (
    <div>
      <h2 className="mb-4">Recruitment Management</h2>

      <Row className="mb-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Open Positions</Card.Title>
              <h3>6</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Applications</Card.Title>
              <h3>43</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Interviews Scheduled</Card.Title>
              <h3>12</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Positions Filled</Card.Title>
              <h3>8</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Group className="d-flex align-items-center" style={{ width: '300px' }}>
              <Form.Control
                type="text"
                placeholder="Search vacancies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-secondary" className="ms-2">
                <FaSearch />
              </Button>
            </Form.Group>
            <Button variant="primary" onClick={() => setShowAddModal(true)}>
              <FaPlus className="me-2" />
              Add Vacancy
            </Button>
          </div>

          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Position</th>
                <th>Department</th>
                <th>Openings</th>
                <th>Applications</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vacancies.map(vacancy => (
                <tr key={vacancy.id}>
                  <td>{vacancy.id}</td>
                  <td>{vacancy.position}</td>
                  <td>{vacancy.department}</td>
                  <td>{vacancy.openings}</td>
                  <td>{vacancy.applications}</td>
                  <td>
                    <Badge bg={vacancy.status === 'Open' ? 'success' : 'warning'}>
                      {vacancy.status}
                    </Badge>
                  </td>
                  <td>{vacancy.deadline}</td>
                  <td>
                    <Button variant="link" className="text-primary p-0 me-2">
                      <FaEdit />
                    </Button>
                    <Button variant="link" className="text-danger p-0 me-2">
                      <FaTrash />
                    </Button>
                    <Button variant="link" className="text-success p-0">
                      <FaUserPlus />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Add Vacancy Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Vacancy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Position Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter position title" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select>
                    <option>Select Department</option>
                    <option>IT</option>
                    <option>HR</option>
                    <option>Finance</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Number of Openings</Form.Label>
                  <Form.Control type="number" placeholder="Enter number of openings" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Application Deadline</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Job Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter job description" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Requirements</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter job requirements" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="primary">
            Add Vacancy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Recruitment;