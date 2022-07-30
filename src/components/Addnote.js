import React, {useContext, useState} from 'react';
import NoteContext from '../context/notes/NoteContext';

const Addnote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description:"", details:"Default"});
    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.details);
    }
    const handleChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value});
    }
  return (
    <>
    <div className='flex p-2'>
      <h1 className='text-2xl'>Add Your Note</h1>
      </div>
      <div className="form p-2">
        <form action="" className='flex flex-col space-y-2'>
          <div className="title">
          <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
            Title
          </label>
          <input type="text" id='title' name='title' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="Enter Title" onChange={handleChange}/>
          </div>
          <div className="description">
          <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
            Description
          </label>
          <input type="text" id='description' name='description' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="Description" onChange={handleChange}/>
          </div>
          <div className="details">
          <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
            Details
          </label>
          <input type="text" id='details' name='details' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="details" onChange={handleChange}/>
          </div>
          <div className="button">
          <button type="button" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>Add Note</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Addnote