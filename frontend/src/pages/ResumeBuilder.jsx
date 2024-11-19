import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Paper,
} from '@mui/material';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Resume Builder
      </Typography>
      {preview ? (
        <Card sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Preview
            </Typography>
            <Typography variant="body1">
              <strong>Name:</strong> {formData.name}
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> {formData.email}
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> {formData.phone}
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> {formData.address}
            </Typography>
            <Typography variant="body1">
              <strong>Education:</strong> {formData.education}
            </Typography>
            <Typography variant="body1">
              <strong>Experience:</strong> {formData.experience}
            </Typography>
            <Typography variant="body1">
              <strong>Skills:</strong> {formData.skills}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setPreview(false)}
              fullWidth
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 600,
            mx: 'auto',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Work Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Preview Resume
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default ResumeBuilder;
