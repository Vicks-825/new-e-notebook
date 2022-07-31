import React, {useContext, useRef, useState} from 'react';
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;
    const ref = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const handleClick = (currentNote) =>{
      ref.current.click();
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
                    {note.title}
                  </h3>
                </div>
                {/*body*/}
                <div className="form p-2">
                <form action="" className='flex flex-col space-y-2'>
                <div className="edescription">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
                    Description
                </label>
                <input value={note.description} type="text" id='edescription' name='edescription' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="edescription" readOnly minLength={5} required/>
                </div>
                <div className="edetails">
                <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-gray-700">
                    Details
                </label>
                <input value={note.details} type="text" id='edetails' name='edetails' className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none" placeholder="edetails" readOnly minLength={5} required/>
                </div>
                </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    <div className="grid bg-gray-300">
    <div className="bg-gray-100 block p-4 rounded-lg shadow-lg max-w-sm">
        <button className="text-gray-900 text-xl leading-tight font-medium mb-2" onClick={handleClick}>{note.title}</button>
        <p className="text-gray-700 text-base mb-4">{note.description}</p>
        <div className="button flex justify-between">
        <button type="button" className=" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() =>updateNote(note)}>Edit Note</button>
        <button type="button" className=" px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>deleteNote(note._id)}>Delete Note</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Noteitem