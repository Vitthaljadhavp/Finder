import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Add icons for inputs
import '../App.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic form validation
    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    // Simulate login process (replace with your backend logic later)
    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com' && password === 'password123') {
        // Redirect based on the role
        const role = 'jobseeker'; // Example: set role as 'jobseeker'
        if (role === 'jobseeker') {
          navigate('/dashboard-jobseeker');
        } else if (role === 'employer') {
          navigate('/dashboard-employer');
        }
      } else {
        setError('Invalid email or password');
      }
    }, 1000);
  };

  return (
    <Container fluid className="p-0" style={{ height: '100vh', background: 'linear-gradient(135deg, #d3cce3, #e9e4f0)' }}>
      <Row className="h-100">
        {/* Left Column: Login Box */}
        <Col sm={12} md={6} className="d-flex justify-content-center align-items-center p-4">
          <div 
            className="w-100 p-5 bg-white rounded shadow-lg login-box"
            style={{ maxWidth: '400px', transition: 'all 0.3s ease' }}
          >
            <h1 className="text-center mb-4" style={{ color: '#ff7e5f' }}>Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="position-relative mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control-lg"
                />
                <FaEnvelope className="position-absolute" style={{ top: '10px', right: '10px', color: '#ff7e5f' }} />
              </Form.Group>
              <Form.Group controlId="formPassword" className="position-relative mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control-lg"
                />
                <FaLock className="position-absolute" style={{ top: '10px', right: '10px', color: '#ff7e5f' }} />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mt-4 w-100 py-2"
                disabled={loading}
                style={{ backgroundColor: '#ff7e5f', borderColor: '#ff7e5f', fontWeight: 'bold' }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
            <div className="text-center mt-3">
              <a href="/forgot-password" style={{ color: '#ff7e5f', fontWeight: 'bold' }}>Forgot Password?</a>
            </div>

            {/* Link to Registration Page */}
            <div className="text-center mt-3">
              <p>Don't have an account? <a href="/register" style={{ color: '#ff7e5f', fontWeight: 'bold' }}>Sign Up</a></p>
            </div>
          </div>
        </Col>

        {/* Right Column: Sidebar */}
        <Col sm={12} md={6} className="d-none d-md-block p-5 sidebar-bg">
          <h3>Welcome to Joble</h3>
          <p>Connecting job seekers with employers effortlessly. Join our platform to explore new opportunities and grow your career.</p>
          <p>Already have an account? Log in to continue.</p>
          <img src="https://via.placeholder.com/300" alt="Jobseeker Illustration" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
