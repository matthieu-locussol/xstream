import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Volume } from '@/components/Volume/Volume';
import { MusicPlayer } from '@/components/Layout/MusicBar/MusicPlayer';
import { MusicThumbnail } from '@/components/Layout/MusicBar/MusicThumbnail';
import { MusicTimeline } from '@/components/Layout/MusicBar/MusicTimeline';
import { MusicTracklistButton } from '@/components/Layout/MusicBar/MusicTracklistButton';

export const MusicBar = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <div className={classes.player}>
            <MusicPlayer />
         </div>
         <div className={classes.content}>
            <Volume />
            <MusicThumbnail
               url="https://static.fnac-static.com/multimedia/Images/FR/NR/4b/e9/81/8513867/1507-1/tsp20161215132633/Agartha.jpg"
               musicName="Ma meilleure amie"
               artistName="Vald"
            />
            <MusicTimeline />
            <MusicTracklistButton />
         </div>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         height: '90px',
         display: 'flex',
         backgroundColor: '#0f0f10',
      },
      player: {
         display: 'flex',
         justifyContent: 'space-around',
         minWidth: '250px',
         padding: theme.spacing(2),
         borderTop: '1px solid #111113',
         borderRight: '1px solid #36373c',
      },
      content: {
         width: '100%',
         display: 'flex',
         alignItems: 'center',
         padding: theme.spacing(2),
         borderTop: '1px solid #111113',
      },
   }),
);
