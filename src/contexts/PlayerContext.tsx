import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type PlayerAction =
   | {
        type: 'TOGGLE_PLAY';
     }
   | {
        type: 'SET_VOLUME';
        volume: number;
     }
   | {
        type: 'SET_TRACK_DURATION';
        duration: number;
     }
   | {
        type: 'SET_TRACK_PROGRESS';
        progress: number;
     }
   | {
        type: 'SHOULD_WAIT_NEXT_UPDATE';
        shouldWait: boolean;
     };

type PlayerState = {
   playing: boolean;
   volume: number;
   track: {
      url: string;
      title: string;
      source: string;
      duration: number;
      progress: number;
      live: boolean;
      waitNextUpdate: boolean;
   };
};

const initialState: PlayerState = {
   playing: false,
   volume: 30,
   track: {
      url: 'https://www.youtube.com/watch?v=S0HbvNR2Xdc',
      title: 'lofi hip hop radio - beats to relax/study to',
      source: 'YouTube',
      duration: 0,
      progress: 0,
      live: false,
      waitNextUpdate: false,
   },
};

type PlayerContextInterface = {
   player: PlayerState;
   dispatch: Dispatch<PlayerAction>;
};

interface PlayerProviderInterface {
   children: React.ReactNode;
}

const PlayerContext = createContext<PlayerContextInterface>({
   player: initialState,
   dispatch: () => ({}),
});

export const usePlayer = (): PlayerContextInterface => useContext(PlayerContext);

const reducer = (state: PlayerState, action: PlayerAction) => {
   let newState: PlayerState;

   switch (action.type) {
      case 'TOGGLE_PLAY':
         newState = {
            ...state,
            playing: !state.playing,
         };
         break;
      case 'SET_VOLUME':
         newState = {
            ...state,
            volume: action.volume,
         };
         break;
      case 'SET_TRACK_DURATION':
         newState = {
            ...state,
            track: {
               ...state.track,
               duration: action.duration,
               // 360000s = 100h
               live: action.duration > 360000,
            },
         };
         break;
      case 'SET_TRACK_PROGRESS':
         newState = {
            ...state,
            track: {
               ...state.track,
               progress: action.progress,
            },
         };
         break;
      case 'SHOULD_WAIT_NEXT_UPDATE':
         newState = {
            ...state,
            track: {
               ...state.track,
               waitNextUpdate: action.shouldWait,
            },
         };
         break;
      default:
         newState = state;
         break;
   }

   return newState;
};

export const PlayerProvider = ({ children }: PlayerProviderInterface): JSX.Element => {
   const hook = useReducer(reducer, initialState);
   const state = {
      player: hook[0],
      dispatch: hook[1],
   };

   return <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>;
};
