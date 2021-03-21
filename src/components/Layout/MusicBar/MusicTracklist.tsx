import clsx from 'clsx';
import React, { useState } from 'react';
import {
   Avatar,
   Slide,
   Card,
   CardHeader,
   CardContent,
   IconButton,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
   makeStyles,
   createStyles,
   Theme,
} from '@material-ui/core';
import { QueueMusic as TracklistIcon, Close as CloseIcon } from '@material-ui/icons';

type MusicTracklistProps = {
   open: boolean;
   onClose: () => void;
};

export const MusicTracklist = ({ open, onClose }: MusicTracklistProps): JSX.Element => {
   const classes = useStyles();
   const [cardClasses, setCardClasses] = useState<string>(clsx(classes.root, classes.zIndex));

   return (
      <Slide
         in={open}
         direction="up"
         timeout={350}
         onEntered={() => setCardClasses(classes.root)}
         onExit={() => setCardClasses(clsx(classes.root, classes.zIndex))}>
         <Card className={cardClasses}>
            <CardHeader
               action={
                  <IconButton aria-label="settings" className={classes.button} onClick={onClose}>
                     <CloseIcon fontSize="small" />
                  </IconButton>
               }
               title={<Typography variant="h6">Your tracklist</Typography>}
               className={classes.header}
               classes={{ action: classes.actions }}
            />
            <CardContent className={classes.content}>
               <List>
                  {[...Array(10)].map((_, idx) => (
                     <ListItem key={idx} dense button className={classes.item}>
                        <ListItemAvatar>
                           <Avatar>
                              <TracklistIcon fontSize="small" />
                           </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Ma meilleure amie" secondary="Vald" />
                     </ListItem>
                  ))}
               </List>
            </CardContent>
         </Card>
      </Slide>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         position: 'fixed',
         right: theme.spacing(2),
         bottom: theme.spacing(10),
         width: 350,
         display: 'flex',
         flexDirection: 'column',
         marginRight: theme.spacing(0.5),
         marginBottom: theme.spacing(4),
         border: '1px solid #36373c',
         filter: 'drop-shadow(0 0 .5rem #36373c)',
         backgroundColor: 'transparent',
      },
      zIndex: {
         zIndex: -1,
      },
      header: {
         backgroundColor: '#191a1f',
      },
      content: {
         maxHeight: 300,
         overflow: 'auto',
         padding: 0,
         backgroundColor: '#26272c',
         '&:last-child': {
            paddingBottom: 0,
         },
      },
      actions: {
         marginTop: 0,
      },
      button: {
         color: '#9f9fa0',
         '&:hover': {
            color: '#ffffff',
            backgroundColor: '#292a2f',
         },
         '&:disabled': {
            color: '#9f9fa0',
         },
      },
      item: {
         transition: 'all 0.3s',
         '&:hover': {
            color: '#ffffff',
            backgroundColor: '#35363c',
         },
      },
   }),
);
