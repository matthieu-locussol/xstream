import React from 'react';
import { Typography } from '@material-ui/core';

type MusicTimevalueProps = {
   time: number;
};

export const MusicTimevalue = ({ time }: MusicTimevalueProps): JSX.Element => {
   const computeTime = () => {
      const hours = Math.floor(time / 60 / 60);
      const minutes = Math.floor(time / 60) - hours * 60;
      const seconds = time % 60 < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

      return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`;
   };

   return <Typography>{computeTime()}</Typography>;
};
