import React from 'react'
import {useContext} from 'react';
import  NoteContext  from '../context/NoteContext'

const About = () => {

  const a = useContext(NoteContext)
  console.log(a)
  
  return (
    <>
      <h2>This is my About {a.state.name} he is a {a.state.skill}.</h2>

      <button type="submit" onClick={a.submitEvent}>Submit</button>
      <h2>{a.btn}</h2>
    </>
  )
}

export default About