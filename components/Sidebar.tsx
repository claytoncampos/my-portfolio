import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

function Sidebar() {
  return (
    <div>
      <img
        src="https://simple-blog-nextjs.claytoncampos.vercel.app/images/profile.jpg"
        alt="avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Clayton</span>
        Campos
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Curriculum
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="#">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Guarulhos, Sao Paulo</span>
        </div>
        <p className="my-2">clayton.almeida.campos@gmail.com</p>
        <p className="my-2">11947049253</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:clayton.almeid.campos@gmail.com')}
      >
        Email
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">
        Light Ui
      </button>
    </div>
  );
}

export default Sidebar;
