import React from 'react';
import { Grid, Paper } from '@mui/material';

interface GrilleMotsProps {
  essais: string[];
  essaiCourant: string;
  motCible: string;
}

const GrilleMot: React.FC<GrilleMotsProps> = ({
  essais,
  essaiCourant,
  motCible,
}) => {
  //MC : longeur ajusté à 6 au lieu de 5 pour permette l'essais de 6 mots
  const rows = Array.from({ length: 6 }, (_, i) => {
    const guess = essais[i] || (i === essais.length ? essaiCourant.toUpperCase() : '');
    return guess.padEnd(5, ' ');
  });

  //MC: paramètre ajouté pour avoir le numero de rangée
  const obtenirCouleurLettre = (letter: string, index: number, rowIndex: number) => {
    //MC: condition rajouté, si le nombre d'essais effectué est égale à la rangée actuelle, ne pas affiché la couleur
    if (essais.length == rowIndex) return 'grey.500';
    if (!motCible) return 'default';
    if (motCible[index] === letter) return 'success.main';
    if (motCible.includes(letter)) return 'warning.main';
    return 'grey.500';
  };

  return (
    <Grid container spacing={1} sx={{ marginTop: 2 }}>
      {rows.map((row, rowIndex) => (
        <Grid container item spacing={1} key={rowIndex}>
          {row.split('').map((letter, index) => (
            <Grid item xs={2.4} key={index}>
              <Paper
                sx={{
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: obtenirCouleurLettre(letter, index, rowIndex),
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
              >
                {letter}
              </Paper>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default GrilleMot;
