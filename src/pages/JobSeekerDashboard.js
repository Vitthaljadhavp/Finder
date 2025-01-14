import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const JobSeekerDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([
    { title: "Software Engineer", company: "ABC Corp", status: "Applied" },
    { title: "Web Developer", company: "XYZ Ltd", status: "Interview Scheduled" },
    { title: "Data Analyst", company: "DataX", status: "Interview Scheduled" },
  ]);

  const availableJobs = [
    { title: "Graphic Designer", company: "CreativeCo", location: "Remote", profession: "Design", salary: "75000", status: "Open" },
    { title: "UX Designer", company: "DesignHub", location: "San Francisco", profession: "Design", salary: "85000", status: "Open" },
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col md={3} className="sidebar-bg d-flex flex-column justify-content-between align-items-center p-4">
          <div className="sidebar-content text-center mb-4">
            <FaUserCircle size={50} />
            <h4>Job Seeker Name</h4>
            <p>Job Seeker</p>
          </div>
          <div className="w-100">
            <Button variant="light" className="w-100 mb-2">
              <FaUserCircle /> My Profile
            </Button>
            <Button variant="light" className="w-100 mb-2">
              <FaUserCircle /> My History
            </Button>
            <Button variant="light" className="w-100 mb-2">
              <FaUserCircle /> Settings
            </Button>
          </div>
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Your Stats</Card.Title>
              <p>Total Jobs Applied: {appliedJobs.length}</p>
              <Button variant="primary">View Jobs</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h1>Welcome to Your Job Seeker Dashboard</h1>
            </Col>

            {/* Job Seeker Dashboard Content */}
            <Col md={12} className="mb-4">
              <h3>Available Jobs</h3>
              <Row>
                {availableJobs.filter(job => job.status === "Open").map((job, index) => (
                  <Col md={3} key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <p>{job.company}</p>
                        <p>Location: {job.location}</p>
                        <p>Profession: {job.profession}</p>
                        <p>Salary: ${job.salary}</p>
                        <Button variant="primary">Apply</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col md={12}>
              <h3>Your Applied Jobs</h3>
              <Row>
                {appliedJobs.map((job, index) => (
                  <Col md={3} key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <p>{job.company}</p>
                        <p>Status: {job.status}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default JobSeekerDashboard;
