import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Integrate Firebase Authentication logic
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('loginTitle')}
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField label={t('email')} variant="outlined" fullWidth margin="normal" required />
        <TextField label={t('password')} variant="outlined" type="password" fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          {t('submit')}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
