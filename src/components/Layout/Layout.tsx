import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { MusicBar } from '@/components/Layout/MusicBar';
import { NavBar } from '@/components/Layout/NavBar';
import { SideBar } from '@/components/Layout/SideBar';

type LayoutProps = {
   children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <div className={classes.main}>
            <SideBar />
            <div className={classes.mainContent}>
               <NavBar />
               <div className={classes.content}>{children}</div>
            </div>
         </div>
         <MusicBar />
      </div>
   );
};

const useStyles = makeStyles(() =>
   createStyles({
      root: {
         display: 'flex',
         width: '100vw',
         height: '100vh',
         flexDirection: 'column',
      },
      main: {
         display: 'flex',
         height: 'calc(100% - 90px)',
      },
      mainContent: {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
      },
      content: {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         overflowY: 'auto',
      },
   }),
);
