import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { Avatar, makeStyles } from '@material-ui/core'
import { blue, green, orange, red } from '@material-ui/core/colors'


const useStyles=makeStyles({
  test:{
    border:(note)=>{
      if(note.category=="work"){
        return '1px solid red'
      }
      if(note.category=="reminders"){
        return '1px solid green'
      }
      if(note.category=="todos"){
        return '1px solid blue'
      }
      if(note.category=="money"){
        return '1px solid orange'
      }
      
      
    }
  },
  avatar:{
    background:(note)=>{

      if(note.category=="work"){
        return red[500]
      }
      if(note.category=="reminders"){
        return green[400]
      }
      if(note.category=="todos"){
        return blue[500]
      }
      if(note.category=="money"){
        return orange[700]
      }
    }
  }
})

export default function NotesCard({ note,handleDelete }) {
  const classes=useStyles(note)
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
          action={
            <IconButton onClick={()=>handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}