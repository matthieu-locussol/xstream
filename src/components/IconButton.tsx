import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export type IconButtonProps = MuiIconButtonProps;

export const IconButton = (props: IconButtonProps): JSX.Element => {
   const classes = useStyles();

   return (
      <MuiIconButton className={classes.button} {...props}>
         {props.children}
      </MuiIconButton>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      button: {
         display: 'flex',
         width: theme.spacing(7),
         height: theme.spacing(7),
         color: '#ffffff',
         '&:hover': {
            backgroundColor: '#191a1f',
         },
         '&:disabled': {
            color: '#9f9fa0',
         },
      },
   }),
);
