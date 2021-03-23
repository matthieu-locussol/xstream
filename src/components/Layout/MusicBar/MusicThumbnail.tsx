import clsx from 'clsx';
import React, { useState } from 'react';
import { Avatar, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Marquee from 'react-fast-marquee';
import { MusicPlayer } from '@/components/Layout/MusicBar/MusicPlayer';
import ReactPlayer from 'react-player';

type MusicThumbnailProps = {
   url: string;
   musicName: string;
   artistName: string;
   playerRef: React.MutableRefObject<ReactPlayer | null>;
};

export const MusicThumbnail = ({ url, musicName, artistName, playerRef }: MusicThumbnailProps): JSX.Element => {
   const classes = useStyles();
   const [hover, setHover] = useState(false);

   return (
      <div className={classes.root}>
         <div className={hover ? clsx(classes.player, classes.visiblePlayer) : classes.player}>
            <MusicPlayer playerRef={playerRef} />
         </div>
         <div className={classes.thumbnail} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Avatar variant="rounded" src={url} alt={`${musicName}`} className={classes.avatar} />
            <Marquee gradient={false} style={{ maxWidth: 160 }}>
               <ListItemText primary={musicName} secondary={artistName} classes={{ root: classes.text }} />
            </Marquee>
         </div>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         alignItems: 'center',
         position: 'relative',
      },
      thumbnail: {
         display: 'flex',
         alignItems: 'center',
         position: 'relative',
      },
      player: {
         opacity: 0,
         transition: 'all 0.3s',
         position: 'absolute',
         left: theme.spacing(2),
         bottom: 90,
         zIndex: -10,
         filter: `drop-shadow(0 0 .5rem ${theme.palette.primary.main})`,
      },
      visiblePlayer: {
         opacity: 1,
         zIndex: 'auto',
      },
      avatar: {
         marginLeft: theme.spacing(3),
         marginRight: theme.spacing(2),
         filter: `drop-shadow(0 0 .25rem ${theme.palette.primary.main})`,
         transition: 'all 0.3s',
         '&:hover': {
            filter: `drop-shadow(0 0 0.75rem ${theme.palette.primary.main})`,
         },
      },
      text: {
         whiteSpace: 'nowrap',
         marginRight: 32,
      },
   }),
);
