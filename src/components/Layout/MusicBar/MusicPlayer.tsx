import React, { useState } from 'react';
import {
   PlayArrow as PlayIcon,
   Pause as PauseIcon,
   SkipNext as NextIcon,
   SkipPrevious as PreviousIcon,
} from '@material-ui/icons';
import { IconButton } from '@/components/IconButton';

export const MusicPlayer = (): JSX.Element => {
   const [pause, setPause] = useState(false);

   return (
      <React.Fragment>
         <IconButton disabled>
            <PreviousIcon fontSize="large" />
         </IconButton>
         <IconButton onClick={() => setPause(!pause)}>
            {pause ? <PauseIcon fontSize="large" /> : <PlayIcon fontSize="large" />}
         </IconButton>
         <IconButton disabled>
            <NextIcon fontSize="large" />
         </IconButton>
      </React.Fragment>
   );
};
