import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const NavBar = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <p>NavBar</p>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         height: '90px',
         display: 'flex',
         padding: theme.spacing(2),
         borderBottom: '1px solid #36373c',
      },
   }),
);
