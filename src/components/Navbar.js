import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('appTitle')}
        </Typography>
        <Button color="inherit" component={Link} to="/">{t('home')}</Button>
        <Button color="inherit" component={Link} to="/login">{t('login')}</Button>
        <Button color="inherit" component={Link} to="/dashboard">{t('dashboard')}</Button>
        <Button color="inherit" component={Link} to="/suggestion">{t('suggestion')}</Button>
        <Button color="inherit" component={Link} to="/info">{t('information')}</Button>
        <Button color="inherit" component={Link} to="/admin">{t('admin')}</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
