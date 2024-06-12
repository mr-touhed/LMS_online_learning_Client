import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function DashMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const item_list = [
    {
      name:"Add course",
    link:"/dashboard/add-course"
    },
    {
      name:"my courses",
    link:"/dashboard/my-courses"
    },
    {
      name:"Enroll course",
    link:"/dashboard/enroll-courses"
    },
    
  ]


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {item_list.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link style={{color:"black", width:"100%"}} to={text.link}>
            <ListItemButton>
                
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
             
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>show menu</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


















