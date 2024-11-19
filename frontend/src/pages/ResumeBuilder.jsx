import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Divider,
  Avatar,
  Stack,
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
    <Box
      className="background-animation"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      {preview ? (
        <Paper
          elevation={4}
          sx={{
            maxWidth: 800,
            width: '100%',
            padding: 4,
            borderRadius: '12px',
            backgroundColor: '#f5f5f5',
          }}
        >
          <Stack alignItems="center" spacing={2} mb={3}>
            <Avatar sx={{ bgcolor: '#1976d2', width: 80, height: 80 }}>
              {formData.name ? formData.name[0] : 'N'}
            </Avatar>
            <Typography variant="h4">{formData.name}</Typography>
            <Typography>{formData.email}</Typography>
            <Typography>{formData.phone}</Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Address
          </Typography>
          <Typography sx={{ mb: 3 }}>{formData.address}</Typography>

          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Education
          </Typography>
          <Typography sx={{ mb: 3 }}>{formData.education}</Typography>

          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Work Experience
          </Typography>
          <Typography sx={{ mb: 3 }}>{formData.experience}</Typography>

          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Typography>{formData.skills}</Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
            onClick={() => setPreview(false)}
          >
            Edit Details
          </Button>
        </Paper>
      ) : (
        <Paper
          elevation={5}
          sx={{
            maxWidth: 800,
            width: '100%',
            padding: 4,
            borderRadius: '12px',
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Build Your Resume
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <TextField
              label="Education"
              name="education"
              multiline
              rows={4}
              value={formData.education}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Work Experience"
              name="experience"
              multiline
              rows={4}
              value={formData.experience}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Skills"
              name="skills"
              multiline
              rows={3}
              value={formData.skills}
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
                mt: 2,
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              Preview Resume
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ResumeBuilder;
