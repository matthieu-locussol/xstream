import React from 'react';
import {
   PlayArrow as PlayIcon,
   Pause as PauseIcon,
   SkipNext as NextIcon,
   SkipPrevious as PreviousIcon,
} from '@material-ui/icons';
import { IconButton } from '@/components/IconButton';
import { usePlayer } from '@/contexts/PlayerContext';

export const MusicControls = (): JSX.Element => {
   const { player, dispatch } = usePlayer();

   return (
      <React.Fragment>
         <IconButton disabled>
            <PreviousIcon fontSize="large" />
         </IconButton>
         <IconButton onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}>
            {player.playing ? <PauseIcon fontSize="large" /> : <PlayIcon fontSize="large" />}
         </IconButton>
         <IconButton disabled>
            <NextIcon fontSize="large" />
         </IconButton>
      </React.Fragment>
   );
};
