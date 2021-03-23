import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Grid, Slider } from '@material-ui/core';
import { MusicTimevalue } from '@/components/Layout/MusicBar/MusicTimevalue';
import { usePlayer } from '@/contexts/PlayerContext';
import ReactPlayer from 'react-player';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '97.5%',
         position: 'absolute',
         top: 21,
         height: 8,
         borderRadius: 4,
         zIndex: 1,
         transition: 'all 0.3s',
      },
      active: {
         backgroundColor: 'transparent',
      },
      bar: {
         position: 'relative',
         borderRadius: 5,
         backgroundColor: `${theme.palette.primary.dark}80`,
      },
   }),
)(LinearProgress);

type MusicTimelineProps = {
   playerRef: React.MutableRefObject<ReactPlayer | null>;
};

export const MusicTimeline = ({ playerRef }: MusicTimelineProps): JSX.Element => {
   const classes = useStyles();
   const { player, dispatch } = usePlayer();

   return (
      <Grid container spacing={2} className={classes.root}>
         <Grid item className={classes.time}>
            <MusicTimevalue time={player.track.live ? 0 : player.track.progress} />
         </Grid>
         <Grid item xs className={classes.slider}>
            <CustomMusicSlider
               value={player.track.live ? 0 : player.track.progress}
               onChange={(_, value) => {
                  if (!player.track.live) {
                     dispatch({
                        type: 'SET_TRACK_PROGRESS',
                        progress: Number(value),
                     });
                     playerRef?.current?.seekTo(Number(value), 'seconds');
                     dispatch({
                        type: 'SHOULD_WAIT_NEXT_UPDATE',
                        shouldWait: true,
                     });
                  }
               }}
               min={0}
               max={player.track.live ? 0 : player.track.duration}
            />
            <BorderLinearProgress
               variant="determinate"
               value={100}
               style={{ width: `${player.track.buffered ? player.track.buffered * 97.5 : 0}%` }}
            />
         </Grid>
         <Grid item className={classes.time}>
            <MusicTimevalue time={player.track.live ? 0 : player.track.duration} />
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
      zIndex: 2,
      '&:hover': {
         filter: `drop-shadow(0 0 0.5rem #3d50fa)`,
      },
   },
   thumb: {
      height: 12,
      width: 12,
      marginTop: -2,
      marginLeft: -6,
      transition: 'all 0.3s',
   },
   track: {
      color: '#3d50fa',
      height: 8,
      borderRadius: 4,
      transition: 'all 0.3s',
   },
   rail: {
      color: '#9f9fa0',
      height: 8,
      borderRadius: 4,
      transition: 'all 0.3s',
      zIndex: 0,
   },
})(Slider);

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         marginLeft: theme.spacing(1),
         marginRight: theme.spacing(1),
      },
      slider: {
         display: 'flex',
         alignItems: 'center',
         position: 'relative',
      },
      time: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         minWidth: theme.spacing(8),
      },
   }),
);
