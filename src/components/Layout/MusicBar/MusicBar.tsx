import React, { useRef } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Volume } from '@/components/Volume/Volume';
import { MusicControls } from '@/components/Layout/MusicBar/MusicControls';
import { MusicThumbnail } from '@/components/Layout/MusicBar/MusicThumbnail';
import { MusicTimeline } from '@/components/Layout/MusicBar/MusicTimeline';
import { MusicTracklistButton } from '@/components/Layout/MusicBar/MusicTracklistButton';
import { usePlayer } from '@/contexts/PlayerContext';
import ReactPlayer from 'react-player';

export const MusicBar = (): JSX.Element => {
   const classes = useStyles();
   const playerRef = useRef<ReactPlayer | null>(null);
   const { player } = usePlayer();

   return (
      <div className={classes.root}>
         <div className={classes.player}>
            <MusicControls />
         </div>
         <div className={classes.content}>
            <Volume />
            <MusicThumbnail
               url="https://midiaresearch.com/storage/uploads/blog/images/2017/07/youtube-square-logo.png"
               track={player.track}
               playerRef={playerRef}
            />
            <MusicTimeline playerRef={playerRef} />
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
