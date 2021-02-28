import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const SideBar = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Typography color="textSecondary" gutterBottom>
            Playlists
         </Typography>
         <List>
            <ListItem button>
               <ListItemText primary="Favorite" />
            </ListItem>
            <ListItem button>
               <ListItemText primary="Reggae" />
            </ListItem>
            <ListItem button>
               <ListItemText primary="French rap" />
            </ListItem>
         </List>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         minWidth: '250px',
         display: 'flex',
         flexDirection: 'column',
         padding: theme.spacing(2),
         backgroundColor: '#191a1f',
         borderRight: '1px solid #36373c',
      },
   }),
);
