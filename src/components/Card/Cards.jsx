import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

export default function Cards({ person }) {
  return (
    <Card sx={{ width: 350 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {/* <PanoramaFishEyeIcon></PanoramaFishEyeIcon> */}
          {person.height} height
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {person.mass} mass
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {person.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {person.birth_year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}