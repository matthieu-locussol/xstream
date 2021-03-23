import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { usePlayer } from '@/contexts/PlayerContext';

type OnProgressState = {
   played: number;
   playedSeconds: number;
   loaded: number;
   loadedSeconds: number;
};

type MusicPlayerProps = {
   playerRef: React.MutableRefObject<ReactPlayer | null>;
};

export const MusicPlayer = ({ playerRef }: MusicPlayerProps): JSX.Element => {
   const { player, dispatch } = usePlayer();

   const updateTimeline = (state: OnProgressState) => {
      if (player.track.waitNextUpdate) {
         dispatch({
            type: 'SHOULD_WAIT_NEXT_UPDATE',
            shouldWait: false,
         });
      } else {
         dispatch({
            type: 'SET_TRACK_PROGRESS',
            progress: Math.round(state.playedSeconds),
         });
      }
   };

   const updateDuration = (duration: number) => {
      dispatch({
         type: 'SET_TRACK_DURATION',
         duration,
      });
   };

   return (
      <ReactPlayer
         ref={playerRef}
         width={256}
         height={144}
         playing={player.playing}
         volume={player.volume / 100}
         onDuration={updateDuration}
         onProgress={updateTimeline}
         url={player.track.url}
      />
   );
};
