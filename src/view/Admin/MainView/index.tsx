import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminUserListView from '../UserListView';
import AdminUserDetailView from '../UserDetailView';

const drawerWidth = 240;

export default function AdminMainView() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem key='회원 정보' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary='회원 정보' />
              </ListItemButton>
            </ListItem>
            <ListItem key='블랙 리스트' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DoDisturbIcon />
                </ListItemIcon>
                <ListItemText primary='블랙 리스트' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key='공지사항' disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary='공지사항' />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item md={12} xl={8}>
            <AdminUserListView />
          </Grid> 
          <Grid item md={12} xl={4}>
            <AdminUserDetailView />
          </Grid> 
        </Grid>
      </Box>
    </Box>
  );
}
