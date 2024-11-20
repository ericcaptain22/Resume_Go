import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Home = () => {
  return (
    <Box className="background-animation" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          {/* Logo */}
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="JobWings Logo"
            sx={{
              height: 40,
              width: 40,
              mr: 2,
            }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            JobWings
          </Typography>
          <Link to="/" style={{ textDecoration: 'none', color: '#fff', marginRight: '1rem' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#fff', marginRight: '1rem' }}>
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/resume-templates" style={{ textDecoration: 'none', color: '#fff', marginRight: '1rem' }}>
            <Button color="inherit">Resume Templates</Button>
          </Link>
          <Link to="/jobs" style={{ textDecoration: 'none', color: '#fff', marginRight: '1rem' }}>
            <Button color="inherit">Jobs</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#fff' }}>
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '12px',
            maxWidth: 800,
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Welcome to JobWings
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', marginBottom: 3 }}>
            Build your professional profile, create resumes, explore job opportunities, and connect with recruiters.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Link to="/login/user" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              >
                User Login
              </Button>
            </Link>
            <Link to="/login/recruiter" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  padding: '0.75rem 2rem',
                  borderRadius: '8px',
                  transition: 'transform 0.2s ease',
                  '&:hover': { transform: 'scale(1.1)' },
                }}
              >
                Recruiter Login
              </Button>
            </Link>
          </Box>
        </Paper>
      </Box>

     

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: '#1976d2',
          color: '#fff',
          py: 2,
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant="body2" gutterBottom>
          © 2024 JobWings. All Rights Reserved.
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#fff' }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
            <Instagram />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
