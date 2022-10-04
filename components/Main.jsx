import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700 font-bold">
            Ich bin <span className="text-purple-600">Stefan</span>
          </h1>
          <h1 className="py-1 text-gray-700 font-bold">
            Ein Anwendungsentwickler
          </h1>
          <p className=" py-4 text-gray-600 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            quisquam dolorum perferendis officiis repellat in iste quo. Esse
            vero aut illum natus itaque quaerat omnis, explicabo, similique
            provident molestiae praesentium dolorem eius distinctio recusandae .
          </p>
          <div className="flex items-center justify-between max-w-[390px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
