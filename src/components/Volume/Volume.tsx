import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { VolumeButton } from '@/components/Volume/VolumeButton';
import { VolumeSlider } from '@/components/Volume/VolumeSlider';

export const Volume = (): JSX.Element => {
   const classes = useStyles();
   const [show, setShow] = useState(false);
   const [volume, setVolume] = useState(70);

   return (
      <div className={classes.root}>
         <VolumeButton active={show} volume={volume} onClick={() => setShow(!show)} />
         <VolumeSlider open={show} volume={volume} onClose={() => setShow(false)} setVolume={setVolume} />
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         alignItems: 'center',
         marginLeft: theme.spacing(1),
      },
   }),
);
