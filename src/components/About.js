import React, {useContext, useEffect} from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  }, [])
  return (
    <div>About Page {a.state.name} language {a.state.lang}</div>
  )
}

export default About