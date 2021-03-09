import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Grid, Slider } from '@material-ui/core';
import { MusicTimevalue } from '@/components/Layout/MusicBar/MusicTimevalue';

export const MusicTimeline = (): JSX.Element => {
   const classes = useStyles();
   const [currentTime, setCurrentTime] = useState(0);
   const [timeoutRef, setTimeoutRef] = useState(-1);

   useEffect(() => {
      setTimeoutRef(window.setTimeout(() => setCurrentTime(Math.min(currentTime + 1, 336)), 1000));
   }, [currentTime]);

   return (
      <Grid container spacing={2} className={classes.root}>
         <Grid item className={classes.time}>
            <MusicTimevalue time={currentTime} />
         </Grid>
         <Grid item xs className={classes.slider}>
            <CustomMusicSlider
               value={currentTime}
               onChange={(_, value) => {
                  window.clearTimeout(timeoutRef);
                  setCurrentTime(Number(value));
               }}
               min={0}
               max={336}
            />
         </Grid>
         <Grid item className={classes.time}>
            <MusicTimevalue time={336} />
         </Grid>
      </Grid>
   );
};

const CustomMusicSlider = withStyles({
   root: {
      color: '#3d50fa',
      height: 8,
      position: 'relative',
      top: 0,
      filter: 'drop-shadow(0 0 .25rem #3d50fa)',
      transition: 'all 0.3s',
      '&:hover': {
         filter: `drop-shadow(0 0 0.5rem #3d50fa)`,
      },
   },
   thumb: {
      height: 8,
      width: 8,
      marginTop: 0,
      marginLeft: -6,
      transition: 'all 0.3s',
   },
   active: {},
   valueLabel: {
      left: 'calc(-50% + 4px)',
   },
   track: {
      height: 8,
      borderRadius: 4,
      transition: 'all 0.3s',
   },
   rail: {
      height: 8,
      borderRadius: 4,
      transition: 'all 0.3s',
   },
})(Slider);

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         marginRight: theme.spacing(1),
      },
      slider: {
         display: 'flex',
         alignItems: 'center',
      },
      time: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         minWidth: theme.spacing(8),
      },
   }),
);
