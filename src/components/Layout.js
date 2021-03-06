  
import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
const drawerWidth = 240

const useStyles = makeStyles({
    page: {
      marginTop:"34px",
      background: '#f9f9f9',
      width: '100%',
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    appbar:{
      width:`calc(100%-${drawerWidth}px)`,
      backgroundColor:"white",
      color:"black"
     
    }
    
  })
export default function Layout({ children }) {
    const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
  ];


  return (
    <div className={classes.root}>
      {/* app bar */}

 

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Thor Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
            
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon   color="primary">{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
      
        { children }
      </div>
    </div>
  )
}