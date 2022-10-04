import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-purple-600">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600"> // Lorem ipsum dolor sit amet.</p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            similique doloribus atque, suscipit vel, corporis laudantium debitis
            odio omnis excepturi magni. Ullam necessitatibus ut unde quos eum
            aperiam deserunt est repellat excepturi, odio asperiores ipsa
            corporis, debitis vel corrupti nostrum commodi, beatae perferendis
            id in.
          </p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            consequatur quibusdam obcaecati odio nobis perferendis similique,
            beatae vel, exercitationem accusantium odit recusandae. Iste vero,
            quibusdam aspernatur nemo alias repudiandae adipisci, recusandae
            ipsam et accusamus qui sunt error consequatur saepe. Corrupti!
          </p>
        </div>
        <div className="shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300 m-auto w-full h-auto">
          <Image
            className="rounded-xl"
            src="/../public/assets/images/background.jpg"
            alt="about-pic"
            width="2736"
            height="1824"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
