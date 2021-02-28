import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const MusicBar = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <div className={classes.menu}>MusicBar left</div>
         <div className={classes.content}>MusicBar right</div>
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
      menu: {
         minWidth: '250px',
         padding: theme.spacing(2),
         borderTop: '1px solid #111113',
         borderRight: '1px solid #36373c',
      },
      content: {
         padding: theme.spacing(2),
         borderTop: '1px solid #111113',
      },
   }),
);
