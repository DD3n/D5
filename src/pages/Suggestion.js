import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Suggestion = () => {
  const { t } = useTranslation();
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with Firestore to save the suggestion and optionally notify admins
    alert("Forslaget er sendt inn!");
    setSuggestion("");
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        {t('suggestionTitle')}
      </Typography>
      <Paper sx={{ padding: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ditt forslag"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Send inn forslag
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Suggestion;
