import React from 'react';
import { ClickAwayListener, Fade, Slider } from '@material-ui/core';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';

type VolumeSliderProps = {
   open: boolean;
   volume: number;
   onClose: () => void;
   setVolume: React.Dispatch<React.SetStateAction<number>>;
};

export const VolumeSlider = ({ open, volume, onClose, setVolume }: VolumeSliderProps): JSX.Element => {
   const classes = useStyles();

   return (
      <Fade in={open} unmountOnExit={true}>
         <div className={classes.container}>
            {open && (
               <ClickAwayListener onClickAway={onClose}>
                  <CustomVolumeSlider
                     orientation="vertical"
                     value={volume}
                     defaultValue={70}
                     onChange={(_, value) => setVolume(Number(value))}
                     step={5}
                     min={0}
                     max={100}
                  />
               </ClickAwayListener>
            )}
         </div>
      </Fade>
   );
};

const CustomVolumeSlider = withStyles({
   root: {
      position: 'absolute',
      top: -114,
      left: -6,
      display: 'flex',
      height: 120,
      marginLeft: '16px',
      color: '#ffffff',
      width: 4,
      filter: 'drop-shadow(0 0 .5rem #3d50fa)',
   },
   thumb: {
      height: 12,
      width: 12,
      backgroundColor: '#ffffff',
      border: '2px solid currentColor',
      '&:focus,&:hover,&$active': {
         boxShadow: 'inherit',
      },
   },
})(Slider);

const useStyles = makeStyles(() =>
   createStyles({
      container: {
         display: 'flex',
         position: 'fixed',
         bottom: 0,
         height: 120,
      },
   }),
);
