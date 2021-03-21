import React, { useState } from 'react';
import { IconButton, makeStyles, createStyles, Theme, Backdrop } from '@material-ui/core';
import { QueueMusic as TracklistIcon } from '@material-ui/icons';
import { MusicTracklist } from '@/components/Layout/MusicBar/MusicTracklist';

export const MusicTracklistButton = (): JSX.Element => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   return (
      <div className={classes.root}>
         <IconButton className={open ? classes.buttonActive : classes.button} onClick={() => setOpen(!open)}>
            <TracklistIcon />
         </IconButton>
         <Backdrop open={open} onClick={() => setOpen(false)} className={classes.backdrop}>
            <MusicTracklist open={open} onClose={() => setOpen(false)} />
         </Backdrop>
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
      buttonActive: {
         color: '#ffffff',
         backgroundColor: '#191a1f',
         '&:hover': {
            backgroundColor: '#191a1f',
         },
      },
      backdrop: {
         zIndex: 9999999,
      },
   }),
);
