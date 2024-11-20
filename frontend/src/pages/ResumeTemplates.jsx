import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, Button, Box } from '@mui/material';

const templates = [
  { id: 1, name: 'Classic Resume', preview: '/templates/classic-preview.png' },
  { id: 2, name: 'Modern Resume', preview: '/templates/modern-preview.png' },
  { id: 3, name: 'Creative Resume', preview: '/templates/creative-preview.png' },
  { id: 4, name: 'Elegant Resume', preview: '/templates/elegant-preview.png' },
  { id: 5, name: 'Minimalist Resume', preview: '/templates/minimalist-preview.png' },
];

const ResumeTemplates = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-template/${id}`);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Choose a Resume Template
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <img
                src={template.preview}
                alt={`${template.name} Preview`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                }}
              />
              <Typography variant="h6" gutterBottom>
                {template.name}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEdit(template.id)}
              >
                Edit Template
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResumeTemplates;
