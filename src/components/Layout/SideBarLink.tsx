import clsx from 'clsx';
import React, { useRef } from 'react';
import { useOverflow } from 'use-overflow';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SideBarLinkWrapper } from '@/components/Layout/SideBarLinkWrapper';

type SideBarLinkProps = {
   active?: boolean;
   value: string;
};

export const SideBarLink = ({ active, value }: SideBarLinkProps): JSX.Element => {
   const classes = useStyles();
   const buttonRef = useRef(null);
   const { refXOverflowing } = useOverflow(buttonRef);

   return (
      <SideBarLinkWrapper title={value} visible={refXOverflowing}>
         <Button
            disabled={active}
            fullWidth
            color={active ? 'primary' : 'inherit'}
            variant={active ? 'contained' : 'text'}
            classes={{
               root: active ? clsx(classes.root, classes.active) : classes.root,
               label: classes.text,
            }}>
            <span ref={buttonRef} className={classes.content}>
               {value}
            </span>
         </Button>
      </SideBarLinkWrapper>
   );
};

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         paddingLeft: theme.spacing(2),
         justifyContent: 'flex-start',
         color: '#8a8b8d',
         boxShadow: 'none',
         width: 200,
         height: 40,
         overflow: 'hidden',
         lineHeight: 30,
         position: 'relative',
         '&:hover': {
            color: theme.palette.text.primary,
         },
      },
      content: {
         width: '88%',
         position: 'absolute',
         whiteSpace: 'nowrap',
         overflow: 'hidden',
         textOverflow: 'ellipsis',
         textAlign: 'left',
      },
      active: {
         fontWeight: 600,
         filter: 'drop-shadow(0 0 .25rem #3d50fa)',
         '&:disabled': {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.main,
         },
      },
      text: {
         fontSize: 16,
         textTransform: 'none',
         transition: 'all 0.3s',
      },
   }),
);
