import { Card, Form, Button, Row, Col } from 'react-bootstrap';

function ReviewerSettings() {
  return (
    <div>
      <h2 className="mb-4">Reviewer Settings</h2>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Review Preferences</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Default Review Template</Form.Label>
              <Form.Select>
                <option>Standard Performance Review</option>
                <option>Technical Skills Assessment</option>
                <option>Leadership Evaluation</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Review Period</Form.Label>
              <Form.Select>
                <option>Quarterly</option>
                <option>Semi-Annual</option>
                <option>Annual</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reminder Frequency</Form.Label>
              <Form.Select>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary">Save Preferences</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Notification Settings</Card.Title>
          <Form>
            <Form.Check 
              type="switch"
              id="new-submission"
              label="New Review Submission Alerts"
              defaultChecked
              className="mb-2"
            />
            <Form.Check 
              type="switch"
              id="deadline-reminder"
              label="Deadline Reminders"
              defaultChecked
              className="mb-2"
            />
            <Form.Check 
              type="switch"
              id="team-updates"
              label="Team Performance Updates"
              defaultChecked
              className="mb-2"
            />
            <Form.Check 
              type="switch"
              id="report-generation"
              label="Report Generation Notifications"
              defaultChecked
              className="mb-3"
            />
            <Button variant="primary">Save Notification Settings</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Access Control</Card.Title>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Review Access Level</Form.Label>
                  <Form.Select>
                    <option>Team Only</option>
                    <option>Department</option>
                    <option>Organization</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Report Access Level</Form.Label>
                  <Form.Select>
                    <option>Personal Reports</option>
                    <option>Team Reports</option>
                    <option>All Reports</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary">Update Access Settings</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReviewerSettings;