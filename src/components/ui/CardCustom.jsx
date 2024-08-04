import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {


  
  
  
  return (
    <Card className='p-5 border-8  ' sx={{ maxWidth: 345 }}>
      <div className='' >
        <img className=' object-scale-down  w-full h-32' src="" alt="" />
      </div>
      <CardContent className='border-4 ' >
        <Typography gutterBottom variant="h5" component="div">
          Text 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Font 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Color 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Size 
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          Price  ₹
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="large">Confirm</Button>
        <Button size="large">Delete</Button>
      </CardActions>
    </Card>
  );
}
