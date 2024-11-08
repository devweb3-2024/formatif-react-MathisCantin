import React from 'react';
import { TextField, Box, Button } from '@mui/material';

interface ClavierProps {
  essaiCourant: string;
  setEssaiCourant: React.Dispatch<React.SetStateAction<string>>;
  onEnter: () => void;
  inactif: boolean;
}

//MC: Ajout d'une fonction pour redémarrer la partie avec un nouveau mot
const redemarrer = () => {
  window.location.reload();
}

const Clavier: React.FC<ClavierProps> = ({
  essaiCourant,
  setEssaiCourant,
  onEnter,
  inactif,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z]{0,5}$/.test(value)) {
      setEssaiCourant(value);
    }
  };

  //MC: Ajout du bouton redémarrer avec un balise vide pour pouvoir retourner 2 éléments en un
  return (
    <>
      <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
        <TextField
          label="Entrez un mot"
          variant="outlined"
          value={essaiCourant}
          onChange={handleChange}
          disabled={inactif}
          slotProps={{ htmlInput: { style: { textTransform: 'uppercase' } } }}
          fullWidth
        />
        <Button variant="contained" onClick={onEnter} disabled={inactif}>
          Entrer
        </Button>
      </Box>
      <Button variant="contained" onClick={redemarrer}>
        Redémarrer
      </Button>
    </>
  );
};

export default Clavier;
