import React, {useContext, useEffect, useRef, useState} from 'react';
import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, getNotes, editNote} = context;
    const [showModal, setShowModal] = useState(false);
    const [note, setNote] = useState({id: "", etitle: "", edescription:"", edetails:"Default"});
    let Navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes();
      }
      else{
        Navigate("/login", { replace: true });
      }
      
      // eslint-disable-next-line
    }, [])
    const ref = useRef(null);
    const refClose = useRef(null);
    const updateNote = (currentNote) =>{
        ref.current.click();
        setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, edetails: currentNote.details});
    }
    const handleClick = (e) =>{
        setShowModal(false);
        //console.log("Updating the note", note);
        editNote(note.id, note.etitle, note.edescription, note.edetails);
        //refClose.current.click();
        //e.preventDefault();
    }
    const handleChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value});
    }
    
  return (
    <>
    <button ref={ref} className="hidden bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}>
        Open regular modal
    </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[30rem] my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {note.etitle}
                  </h3>
                </div>
                {/*body*/}
                <div className="form p-2">
                <form action="" className='flex flex-col space-y-2'>
                <div className="edescription">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
                    Description
                </label>
                <input value={note.edescription} type="text" id='edescription' name='edescription' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="edescription" onChange={handleChange} minLength={5} required/>
                </div>
                <div className="edetails">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
                    Details
                </label>
                <input value={note.edetails} type="text" id='edetails' name='edetails' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="edetails" onChange={handleChange} minLength={5} required/>
                </div>
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button ref={refClose} className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button disabled={note.etitle.length < 5 || note.edescription.length<5} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handleClick}>
                    Update Note
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    <div className='flex flex-col'>
      <h1 className='text-2xl p-2'>Your Note</h1>
      <div className='p-2'>
        {notes.length === 0 && "You don't have any notes"} 
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-3 p-2'>
        {notes.map((note) =>{
          return <Noteitem key={note._id} updateNote={updateNote} note={note}/>;
        })}
      </div>
    </div>
    </>
  )
}

export default Notes