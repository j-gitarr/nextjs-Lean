import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import { useState } from 'react';
import Space from './style/Space';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({open, handleClose}) {
  let isFull = false;
  if (typeof window !== 'undefined') {
    isFull = localStorage.getItem("fullscreen");
    isFull = isFull == null? false: JSON.parse(isFull);
}
  
  const [checked, setChecked] = useState(isFull);
  
    const handleChange = () => {
      localStorage.setItem("fullscreen", !checked);
      setChecked(!checked);
    };
  
    return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" style={{margin:"0 50px"}}>
          Einstellungen
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Space height="50px"/>
          <div className='centeredContent'>
            Vollbidmodus <Switch checked={checked}
              onChange={handleChange}></Switch>
          </div>
          
          <Space height="50px"/>

          <div className='centeredContent'>
            ©2023 Jerome Fürst 
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Speichern
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}