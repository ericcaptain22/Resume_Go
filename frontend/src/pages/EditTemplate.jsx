import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, Grid, Paper, Divider } from '@mui/material';

const templatesData = {
  1: { name: 'Classic Resume' },
  2: { name: 'Modern Resume' },
  3: { name: 'Creative Resume' },
};

const EditTemplate = () => {
  const { id } = useParams();
  const templateName = templatesData[id]?.name || 'Default Template';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    workExperience: '',
    skills: '',
    language: '',
    education: '',
    summary: '',
    projects: '',
    certifications: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Resume saved successfully!');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Edit {templateName}
      </Typography>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" gutterBottom>
                Fill Out Your Resume
              </Typography>
              <Grid container spacing={2}>
                {Object.keys(formData).map((field) => (
                  <Grid item xs={12} key={field}>
                    <TextField
                      label={field.charAt(0).toUpperCase() + field.slice(1)}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      fullWidth
                      multiline={field !== 'name' && field !== 'phone' && field !== 'email'}
                      rows={field === 'summary' || field === 'projects' ? 3 : 1}
                    />
                  </Grid>
                ))}
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                fullWidth
              >
                Save Resume
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Preview Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h5" gutterBottom>
              Preview
            </Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="h6">{formData.name}</Typography>
            <Typography>{formData.phone}</Typography>
            <Typography>{formData.email}</Typography>
            <Typography>{formData.address}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Summary
            </Typography>
            <Typography>{formData.summary}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Work Experience
            </Typography>
            <Typography>{formData.workExperience}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Skills
            </Typography>
            <Typography>{formData.skills}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Education
            </Typography>
            <Typography>{formData.education}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Projects
            </Typography>
            <Typography>{formData.projects}</Typography>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1" gutterBottom>
              Certifications
            </Typography>
            <Typography>{formData.certifications}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditTemplate;
