import React from 'react';
import { InputBase } from '@material-ui/core';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { ArrowBack as PreviousIcon, ArrowForward as NextIcon, Person as AccountIcon } from '@material-ui/icons';
import { IconButton } from '../IconButton';

export const NavBar = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <div className={classes.left}>
            <IconButton>
               <PreviousIcon />
            </IconButton>
            <IconButton>
               <NextIcon />
            </IconButton>
            <SearchBar placeholder="Search..." />
         </div>
         <div className={classes.right}>
            <IconButton>
               <AccountIcon />
            </IconButton>
         </div>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         height: '90px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: theme.spacing(2, 3),
         borderBottom: '1px solid #36373c',
      },
      left: {
         display: 'flex',
         '& > *:not(:first-child)': {
            marginLeft: theme.spacing(2),
         },
      },
      right: {
         display: 'flex',
      },
   }),
);

const SearchBar = withStyles((theme: Theme) =>
   createStyles({
      input: {
         marginLeft: theme.spacing(1),
         borderRadius: 4,
         position: 'relative',
         border: '1px solid #36373c',
         fontSize: 16,
         width: 240,
         padding: theme.spacing(1.5, 2),
         transition: 'width 0.2s',
         '&:hover': {
            filter: `drop-shadow(0 0 .25rem #36373c)`,
            borderColor: '#56575c',
         },
         '&:active, &:focus': {
            filter: `drop-shadow(0 0 .5rem ${theme.palette.primary.main})`,
            borderColor: theme.palette.primary.main,
            width: 300,
         },
      },
   }),
)(InputBase);
