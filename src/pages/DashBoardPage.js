import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DashboardPage = ({ user, isLoggedIn }) => {
  const navigate = useNavigate();  // Reacts Router's useNavigate hook

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

  const appliedJobs = [
    { title: "Web Developer", company: "XYZ Ltd", status: "Applied" },
    { title: "Data Analyst", company: "DataX", status: "Interview Scheduled" },
  ];

  const handleRedirectToLogin = () => {
    navigate("/login");  // Redirect to login page
  };

  const handleContainerClick = () => {
    // If the user is not logged in, redirect to login page
    if (!isLoggedIn) {
      handleRedirectToLogin();
    }
  };

  return (
    <Container className="py-5" onClick={handleContainerClick}>
      <Row>
        <Col md={3} className="sidebar-bg d-flex flex-column justify-content-between align-items-center p-4">
          <div className="sidebar-content text-center mb-4">
            <FaUserCircle size={50} />
            <h4>{user ? user.name : "Guest"}</h4>
            <p>{user ? user.role : "Please log in"}</p>
          </div>

          {/* Profile Button with Options */}
          <div className="w-100">
            <Button variant="light" className="w-100 mb-2" disabled={!isLoggedIn} onClick={() => !isLoggedIn && handleRedirectToLogin()}>
              <FaUserCircle /> My Profile
            </Button>
            <Button variant="light" className="w-100 mb-2" disabled={!isLoggedIn} onClick={() => !isLoggedIn && handleRedirectToLogin()}>
              <FaUserCircle /> My History
            </Button>
            <Button variant="light" className="w-100 mb-2" disabled={!isLoggedIn} onClick={() => !isLoggedIn && handleRedirectToLogin()}>
              <FaUserCircle /> Settings
            </Button>
          </div>

          {/* Stats */}
          <Card className="w-100">
            <Card.Body>
              <Card.Title>Your Stats</Card.Title>
              <p>Total Jobs Applied: {user && user.role === "Job Seeker" ? appliedJobs.length : 0}</p>
              <p>Total Workers: {user && user.role === "Employer" ? availableWorkers.length : 0}</p>
              <p>Total Job Postings: {user && user.role === "Employer" ? jobListings.length : 0}</p>
              <DropdownButton id="dropdown-basic-button" title="More Options" disabled={!isLoggedIn}>
                <Dropdown.Item href="#/edit-profile">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
              </DropdownButton>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          {/* Dashboard Header */}
          <Row>
            <Col md={12} className="text-center mb-4">
              <h1>Welcome to Your Dashboard, {user ? user.name : "Guest"}</h1>
              <p>Role: {user ? user.role : "Please log in to view your role"}</p>
            </Col>
          </Row>

          {/* Conditional Rendering Based on User's Role */}
          <Row>
            {user && user.role === "Employer" ? (
              <>
                {/* Employer Dashboard View */}
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
                            <Button variant="primary" disabled={!isLoggedIn} onClick={() => !isLoggedIn && handleRedirectToLogin()}>
                              View Job
                            </Button>
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
                            <Button variant="success" disabled={!isLoggedIn} onClick={() => !isLoggedIn && handleRedirectToLogin()}>
                              Hire
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </>
            ) : (
              <>
                {/* Job Seeker Dashboard View */}
                <Col md={12} className="mb-4">
                  <h3>Available Jobs</h3>
                  <Row>
                    {jobListings.filter(job => job.status === "Open").map((job, index) => (
                      <Col md={3} key={index}>
                        <Card>
                          <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <p>{job.company}</p>
                            <p>Location: {job.location}</p>
                            <p>Profession: {job.profession}</p>
                            <p>Salary: ${job.salary}</p>
                            <Button variant="primary" disabled={!isLoggedIn} onClick={() => !isLoggedIn && handleRedirectToLogin()}>
                              Apply
                            </Button>
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
              </>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
