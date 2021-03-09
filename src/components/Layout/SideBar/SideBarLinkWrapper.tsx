import React from 'react';
import { makeStyles, Tooltip, Typography, Zoom } from '@material-ui/core';

type SideBarLinkWrapperPros = {
   title: string;
   visible: boolean;
   children: React.ReactElement;
};

const useStylesBootstrap = makeStyles(() => ({
   arrow: {
      color: '#25262c',
   },
   tooltip: {
      border: '1px solid #36373c',
      backgroundColor: '#25262c',
   },
}));

export const SideBarLinkWrapper = ({ title, visible, children }: SideBarLinkWrapperPros): JSX.Element => {
   const classes = useStylesBootstrap();

   return visible ? (
      <Tooltip
         classes={classes}
         TransitionComponent={Zoom}
         title={<Typography variant="caption">{title}</Typography>}
         placement="right">
         {children}
      </Tooltip>
   ) : (
      children
   );
};
