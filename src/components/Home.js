import React from 'react';
import Addnote from './Addnote';
import Notes from './Notes';

const Home = () => {
  return (
    <>
    <div className='container flex flex-col space-y-4 px-8 my-2'>
      <Addnote/>
      <Notes/>
    </div>
    </>
  )
}

export default Home