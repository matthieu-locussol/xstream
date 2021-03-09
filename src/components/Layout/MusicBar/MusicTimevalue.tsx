import React from 'react';
import { Typography } from '@material-ui/core';

type MusicTimevalueProps = {
   time: number;
};

export const MusicTimevalue = ({ time }: MusicTimevalueProps): JSX.Element => {
   const computeMinutes = (time: number) => {
      const minutes = Math.floor(time / 60);
      return minutes;
   };

   const computeSeconds = (time: number) => {
      const seconds = time % 60;
      return seconds < 10 ? `0${seconds}` : seconds;
   };

   return (
      <Typography>
         {computeMinutes(time)}:{computeSeconds(time)}
      </Typography>
   );
};
