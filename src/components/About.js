import React from 'react';
import image from '../images/my-pic.jpg';

const About = () => {
  return (
    <div>
      <div className="heading font-medium text-2xl flex justify-center my-4">Creater of this E-Notebook</div>
      <div className="card">
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Vicky Kumar</h5>
            <p class="text-gray-700 text-base mb-4">
              I am Vicky Kumar. I have created this website learning ReactJs from Codewithharry. I am currently doing B-Tech from Aerospace Engineering. 
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About