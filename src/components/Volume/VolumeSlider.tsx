import React from 'react';
import { ClickAwayListener, Fade, Slider } from '@material-ui/core';
import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { usePlayer } from '@/contexts/PlayerContext';

type VolumeSliderProps = {
   open: boolean;
   onClose: () => void;
};

export const VolumeSlider = ({ open, onClose }: VolumeSliderProps): JSX.Element => {
   const classes = useStyles();
   const { player, dispatch } = usePlayer();

   return (
      <Fade in={open} unmountOnExit={true}>
         <div className={classes.container}>
            {open && (
               <ClickAwayListener onClickAway={onClose}>
                  <CustomVolumeSlider
                     orientation="vertical"
                     value={player.volume}
                     onChange={(_, value) => {
                        if (value !== player.volume) {
                           dispatch({
                              type: 'SET_VOLUME',
                              volume: Number(value),
                           });
                        }
                     }}
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
