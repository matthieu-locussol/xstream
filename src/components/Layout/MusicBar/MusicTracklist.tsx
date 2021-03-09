import React from 'react';
import { IconButton, makeStyles, createStyles, Theme } from '@material-ui/core';
import { QueueMusic as TracklistIcon } from '@material-ui/icons';

export const MusicTracklist = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <IconButton className={classes.button}>
            <TracklistIcon />
         </IconButton>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         alignItems: 'center',
         marginRight: theme.spacing(1),
      },
      button: {
         color: '#9f9fa0',
         '&:hover': {
            color: '#ffffff',
            backgroundColor: '#191a1f',
         },
         '&:disabled': {
            color: '#9f9fa0',
         },
      },
   }),
);
