import React from 'react'
import image from '../images/foto.png';

const Enotebook = () => {
  return (
    <>
    <div className="mt-10 middle hover:cursor-pointer lg:flex lg:justify-center lg:flex-row-reverse">
        <div className="up bg-white">
            <img className="w-fit lg:hidden" src={image} alt=""/>
            <img className="hidden lg:block lg:w-96" src={image} alt=""/>
        </div>
        <div className="down flex flex-col m-6 space-y-3 lg:bg-white lg:m-0 lg:pl-28 lg:pt-14 lg:w-[40rem]">
            <h2 className="font-medium text-5xl">E-Notebook</h2>
            <p className="">Access your notes from anywhere</p>
        </div>
    </div>
    <div className="features flex justify-center">
        <h2 className="features text-4xl font-medium">Features</h2>
    </div>
    <div className="functionality grid grid-cols-4 gap-4 p-2 mt-6 mx-8">
        <div className="bg-gray-300">
        <div className="bg-gray-100 block p-4 rounded-md shadow-lg max-w-sm">

            <h5 className="inline-block text-gray-900 text-xl leading-tight font-medium mb-2">CREATE</h5>
            <i class="ml-2 fa-solid fa-folder-plus"></i>
            <p className="text-gray-700 text-base mb-4">Create new notes</p>
        </div>
        </div>
        <div className="bg-gray-300">
        <div className="bg-gray-100 block p-4 rounded-md shadow-lg max-w-sm">
            <h5 className="inline-block text-gray-900 text-xl leading-tight font-medium mb-2">READ</h5>
            <i class="ml-2 fa-brands fa-readme"></i>
            <p className="text-gray-700 text-base mb-4">Read available notes</p>
        </div>
        </div>
        <div className="bg-gray-300">
        <div className="bg-gray-100 block p-4 rounded-md shadow-lg max-w-sm">
            <h5 className="inline-block text-gray-900 text-xl leading-tight font-medium mb-2">UPDATE</h5>
            <i class="ml-2 fa-solid fa-file-pen"></i>
            <p className="text-gray-700 text-base mb-4">Update available notes</p>
        </div>
        </div>
        <div className="bg-gray-300">
        <div className="bg-gray-100 block p-4 rounded-md shadow-lg max-w-sm">
            <h5 className="inline-block text-gray-900 text-xl leading-tight font-medium mb-2">DELETE</h5>
            <i class="ml-2 fa-solid fa-trash"></i>
            <p className="text-gray-700 text-base mb-4">Delete unwanted notes</p>
        </div>
        </div> 
    </div>
    </>
  )
}

export default Enotebook