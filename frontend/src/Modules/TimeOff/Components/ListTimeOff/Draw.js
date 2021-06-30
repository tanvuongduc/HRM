import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Label } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 500,
  },
  container:{
    margin: theme.spacing(3)
  },
  textInput:{
    display:'flex',
    flex:1,
    
  },
  datetime: {
    display: 'flex',
    justifyContent:'space-between',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  textDate: {
    width: 205,
  },
  checkbox:{
    
  }
}));

export default function Draw() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };
  const toggleDrawer = ()=> {
    setOpen(true)
  }
 
  const list = () => (
    <div className={classes.list}>
      <form className={classes.container} noValidate autoComplete="off">
                  <label><b>Details</b></label>
                  <TextField className={classes.textInput} id="outlined-basic" label="Lí do nghỉ" variant="outlined" />
                  <div className={classes.datetime}>
                    <TextField
                    
                    className={classes.textDate}
                    id="data"
                    label="Ngày bắt đầu"
                    type="date"
                    defaultValue="2021-06-25"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                    <TextField
                    className={classes.textDate}
                    id="date"
                    label="Ngày kết thúc"
                    type="date"
                    defaultValue="2021-06-25"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    />
                  </div>
                  <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked1}
                        value="all day"
                        name="All day"
                        color="primary"
                        onChange={handleChange1}
                      />
                    }
                    label='All day'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked2}
                        value="repeat"
                        name="repeat"
                        color="primary"
                        onChange={handleChange2}
                      />
                    }
                    label='Repeat'
                  />
                  
                  </div>
                  <hr></hr>
                  <Button variant="contained" type="submit" color="primary">
                    Submit 
                  </Button>
                </form> 
    </div>
  )

 
  return(
    <div>
      <Button onClick={toggleDrawer} variant="contained" color='primary'>Thêm Ngày Nghỉ</Button> 
        <Drawer
          anchor='right'
          open={open}
          onClose={() => setOpen(false)}
          
        >
          {list()}
        </Drawer>
    </div>
  )
}
