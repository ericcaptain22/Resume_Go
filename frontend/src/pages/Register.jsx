import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Box, Typography, Alert, Paper } from '@mui/material';

const Register = ({ userType }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/register', formData);
      setAlert({ type: 'success', message: ` ${userType} Registration successful! Please login.` });
    } catch (error) {
      setAlert({ type: 'error', message: 'Error registering user. Please try again.' });
    }
  };

  return (
    <Box
      className="background-animation"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={5}
          sx={{
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: '#1976d2' }}
          >
            { userType } Register
          </Typography>
          {alert.message && (
            <Alert severity={alert.type} sx={{ mb: 2 }}>
              {alert.message}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                required
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                Register
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};
export const UserRegister = () => <Register userType="User" />;
export const RecruiterRegister = () => <Register userType="Recruiter" />;
export default Register;
