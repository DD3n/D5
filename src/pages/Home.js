import React from 'react';
import { Container, Typography } from '@mui/material';
import TrendingVotesCard from '../components/TrendingVotesCard';
import TopicsOverviewCard from '../components/TopicsOverviewCard';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ marginTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        {t('welcomeMessage')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t('homeDescription')}
      </Typography>
      <TrendingVotesCard />
      <TopicsOverviewCard />
    </Container>
  );
};

export default Home;
