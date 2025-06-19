import React from 'react';
import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Box,
} from '@mui/material';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'es',
    apiKey: '',
  });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [field]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSave = () => {
    // Aquí iría la lógica para guardar la configuración
    console.log('Configuración guardada:', settings);
  };

  return (
    <Container maxWidth="md">
      <Paper className="p-6">
        <Typography variant="h4" component="h1" className="mb-6">
          Configuración
        </Typography>
        
        <Box className="space-y-4">
          <FormControlLabel
            control={
              <Switch
                checked={settings.darkMode}
                onChange={handleChange('darkMode')}
                color="primary"
              />
            }
            label="Modo Oscuro"
          />

          <FormControlLabel
            control={
              <Switch
                checked={settings.notifications}
                onChange={handleChange('notifications')}
                color="primary"
              />
            }
            label="Notificaciones"
          />

          <TextField
            select
            fullWidth
            label="Idioma"
            value={settings.language}
            onChange={handleChange('language')}
            SelectProps={{
              native: true,
            }}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </TextField>

          <TextField
            fullWidth
            label="API Key"
            type="password"
            value={settings.apiKey}
            onChange={handleChange('apiKey')}
            helperText="Ingresa tu API key para conectar con el servicio de AI"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            className="mt-4"
          >
            Guardar Configuración
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Settings; 