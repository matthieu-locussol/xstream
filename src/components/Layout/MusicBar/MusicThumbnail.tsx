import React from 'react';
import { Avatar, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Marquee from 'react-fast-marquee';

type MusicThumbnailProps = {
   url: string;
   musicName: string;
   artistName: string;
};

export const MusicThumbnail = ({ url, musicName, artistName }: MusicThumbnailProps): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Avatar variant="rounded" src={url} alt={`${musicName}`} className={classes.avatar} />
         <Marquee pauseOnHover pauseOnClick gradient={false} style={{ maxWidth: 160 }}>
            <ListItemText primary={musicName} secondary={artistName} classes={{ root: classes.text }} />
         </Marquee>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         alignItems: 'center',
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
      },
   }),
);
