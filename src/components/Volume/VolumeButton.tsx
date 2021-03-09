import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
   VolumeUp as HighVolumeIcon,
   VolumeDown as LowVolumeIcon,
   VolumeOff as MuteVolumeIcon,
} from '@material-ui/icons';
import { IconButton, IconButtonProps } from '@/components/IconButton';

type VolumeButtonProps = {
   active: boolean;
   volume: number;
};

export const VolumeButton = ({ active, volume, ...rest }: VolumeButtonProps & IconButtonProps): JSX.Element => {
   const classes = useStyles();

   return (
      <IconButton className={active ? classes.buttonActive : classes.button} {...rest}>
         {volume === 0 && <MuteVolumeIcon />}
         {volume > 0 && volume < 50 && <LowVolumeIcon />}
         {volume >= 50 && <HighVolumeIcon />}
      </IconButton>
   );
};

const useStyles = makeStyles(() =>
   createStyles({
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
   }),
);
