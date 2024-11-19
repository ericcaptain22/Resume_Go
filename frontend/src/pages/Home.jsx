import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '5rem' }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            Welcome to Resume Builder & Job Portal
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
            Build your professional profile and connect with recruiters.
          </Typography>
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            gap={2} 
            marginTop={3}
          >
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="secondary">
                Register
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
