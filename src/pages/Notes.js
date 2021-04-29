  
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Masonry from 'react-masonry-css';
import { Container } from '@material-ui/core';
import NotesCard from '../components/NotesCard';
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
      const handleDelete= async(id)=>{
        await fetch('http://localhost:8000/notes/'+id,{
          method:'DELETE'
        })

        const newNotes=notes.filter(note=>note.id!=id);
        setNotes(newNotes);
      }
      const breakPoints={
        default:3,
        1100:2,
        700:1
      }
  return (
    <Container>
    <Masonry
    breakpointCols={breakPoints}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
    >

      {notes.map(note => (
        <div key={note.id}>
          <NotesCard note={note} handleDelete={handleDelete}/>
        </div>
      ))}
    </Masonry>
    </Container>
  )
}
