import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { VolumeButton } from '@/components/Volume/VolumeButton';
import { VolumeSlider } from '@/components/Volume/VolumeSlider';
import { usePlayer } from '@/contexts/PlayerContext';

export const Volume = (): JSX.Element => {
   const classes = useStyles();
   const { player } = usePlayer();
   const [show, setShow] = useState(false);

   return (
      <div className={classes.root}>
         <VolumeButton active={show} volume={player.volume} onClick={() => setShow(!show)} />
         <VolumeSlider open={show} onClose={() => setShow(false)} />
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
