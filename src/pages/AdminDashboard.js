import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AdminDashboard = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('adminDashboardTitle')}
      </Typography>
      <Paper sx={{ padding: 2 }}>
        <Typography variant="body1">
          Dette kontrollpanelet lar administratorer administrere forslag, redigere eksisterende og avslutte stemmegivninger, samt se statistikk over brukeraktivitet.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
