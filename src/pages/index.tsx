import React from 'react';
import { Layout } from '@/components/Layout/Layout';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const Index = (): JSX.Element => {
   const classes = useStyles();

   return (
      <Layout>
         <div className={classes.root}>
            <Typography variant="subtitle1" gutterBottom>
               The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur
               adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
         </div>
      </Layout>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         padding: theme.spacing(2),
      },
   }),
);

export default Index;
