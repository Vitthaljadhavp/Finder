import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

//EmployerDashboard
const EmployerDashboard = () => {
  const [jobListings, setJobListings] = useState([
    { title: "Software Engineer", company: "ABC Corp", location: "Remote", profession: "Engineering", salary: "100000", status: "Open" },
    { title: "Web Developer", company: "XYZ Ltd", location: "New York", profession: "Engineering", salary: "85000", status: "Closed" },
    { title: "Data Analyst", company: "DataX", location: "San Francisco", profession: "Data Science", salary: "95000", status: "Open" },
    { title: "Graphic Designer", company: "CreativeCo", location: "Remote", profession: "Design", salary: "75000", status: "Open" },
  ]);

  const availableWorkers = [
    { name: "Jane Smith", skill: "Web Developer" },
    { name: "Mike Johnson", skill: "Graphic Designer" },
    { name: "Sarah Lee", skill: "Data Analyst" },
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col md={3} className="sidebar-bg d-flex flex-column justify-content-between align-items-center p-4">
          <div className="sidebar-content text-center mb-4">
            <FaUserCircle size={50} />
            <h4>Employer Name</h4>
            <p>Employer</p>
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
              <p>Total Job Postings: {jobListings.length}</p>
              <p>Total available workers: {availableWorkers.length}</p>
              <Button variant="primary">Post a Job</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          <Row>
            <Col md={12} className="text-center mb-4">
              <h1>Welcome to Your Employer Dashboard</h1>
            </Col>

            {/* Employer Dashboard Content */}
            <Col md={12} className="mb-4">
              <h3>Your Job Postings</h3>
              <Row>
                {jobListings.map((job, index) => (
                  <Col md={3} key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <p>{job.company}</p>
                        <p>Location: {job.location}</p>
                        <p>Profession: {job.profession}</p>
                        <p>Salary: ${job.salary}</p>
                        <p>Status: {job.status}</p>
                        <Button variant="primary">Edit Job</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col md={12}>
              <h3>Available Workers</h3>
              <Row>
                {availableWorkers.map((worker, index) => (
                  <Col md={3} key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{worker.name}</Card.Title>
                        <p>Skill: {worker.skill}</p>
                        <Button variant="success">Hire</Button>
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

export default EmployerDashboard;
