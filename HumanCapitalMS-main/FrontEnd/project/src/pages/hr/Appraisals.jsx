import { useState } from 'react';
import { Card, Table, Form, Button, Badge, Row, Col } from 'react-bootstrap';
import { FaSearch, FaEye } from 'react-icons/fa';

function HRAppraisals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [appraisals] = useState([
    { 
      id: 1, 
      employee: 'John Doe', 
      reviewer: 'Sarah Manager',
      department: 'IT',
      submitDate: '2024-01-15',
      status: 'Pending',
      score: '-'
    },
    { 
      id: 2, 
      employee: 'Jane Smith', 
      reviewer: 'Mike Leader',
      department: 'HR',
      submitDate: '2024-01-14',
      status: 'Completed',
      score: '4.5/5'
    },
    { 
      id: 3, 
      employee: 'Mike Wilson', 
      reviewer: 'Sarah Manager',
      department: 'Finance',
      submitDate: '2024-01-13',
      status: 'In Review',
      score: '-'
    },
  ]);

  return (
    <div>
      <h2 className="mb-4">Appraisals Management</h2>
      
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Appraisals</Card.Title>
              <h3>150</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Pending Reviews</Card.Title>
              <h3>25</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Completed This Month</Card.Title>
              <h3>45</h3>
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
                placeholder="Search appraisals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-secondary" className="ms-2">
                <FaSearch />
              </Button>
            </Form.Group>
            <Form.Select style={{ width: '200px' }} value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-review">In Review</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </div>

          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Reviewer</th>
                <th>Department</th>
                <th>Submit Date</th>
                <th>Status</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appraisals.map(appraisal => (
                <tr key={appraisal.id}>
                  <td>{appraisal.id}</td>
                  <td>{appraisal.employee}</td>
                  <td>{appraisal.reviewer}</td>
                  <td>{appraisal.department}</td>
                  <td>{appraisal.submitDate}</td>
                  <td>
                    <Badge bg={
                      appraisal.status === 'Completed' ? 'success' :
                      appraisal.status === 'Pending' ? 'warning' : 'info'
                    }>
                      {appraisal.status}
                    </Badge>
                  </td>
                  <td>{appraisal.score}</td>
                  <td>
                    <Button variant="link" className="text-primary p-0">
                      <FaEye />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HRAppraisals;