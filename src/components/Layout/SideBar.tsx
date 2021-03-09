import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SideBarLink } from '@/components/Layout/SideBarLink';

export const SideBar = (): JSX.Element => {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Typography color="textSecondary" gutterBottom>
            Playlists
         </Typography>
         <div className={classes.links}>
            <SideBarLink value="Explore" active={true} />
            <SideBarLink value="Suggest" />
            <SideBarLink value="Top charts" />
            <SideBarLink value="New stuff" />
            <SideBarLink value="Here is a very long name that have its own tooltip blablabla lol" />
         </div>
      </div>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         minWidth: '250px',
         display: 'flex',
         flexDirection: 'column',
         padding: theme.spacing(2),
         paddingLeft: theme.spacing(3),
         paddingRight: theme.spacing(3),
         backgroundColor: '#191a1f',
         borderRight: '1px solid #36373c',
      },
      links: {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         marginTop: theme.spacing(1.5),
         '& > *:not(:first-child)': {
            marginTop: theme.spacing(1),
         },
      },
   }),
);
