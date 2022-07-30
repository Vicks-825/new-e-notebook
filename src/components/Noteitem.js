import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {note, updateNote} = props;
  return (
    <>
    <div className="grid bg-gray-300">
    <div className="bg-gray-100 block p-4 rounded-lg shadow-lg max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{note.title}</h5>
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