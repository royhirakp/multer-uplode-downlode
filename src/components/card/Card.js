import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '1px', transform: 'scale(0.1)' }}
  >
    
  </Box>
);

export default function DataCard() {
  return (
    <Card sx={{ minWidth: 25 }} id="container">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Downlode</Button>
        <Button size="small">remname</Button>
        <Button size="small">delete</Button>
      </CardActions>
    </Card>
  );
}
