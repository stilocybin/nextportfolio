import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import coronaImg from '../public/assets/skills/corona.png';
import cppBibliothek from '../public/assets/skills/cppbibliothek.png';
import phpfilme from '../public/assets/skills/phpfilme.png';
import pong from '../public/assets/skills/pong.png';
import port_card_pic from '../public/assets/skills/port_card_pic.jpg';
import quizapp from '../public/assets/skills/quizapp.png';
import warenkorb from '../public/assets/skills/warenkorb.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Corona Tracker"
            backgroundImg={coronaImg}
            projectUrl="/corona"
          />
          <ProjectItem
            title="CPP BibliothekApp"
            backgroundImg={cppBibliothek}
            projectUrl="/cppbibliothek"
          />
          <ProjectItem
            title="PHP Movie DB"
            backgroundImg={phpfilme}
            projectUrl="/phpfilme"
          />
          <ProjectItem
            title="Pong in JS"
            backgroundImg={pong}
            projectUrl="/pong"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={port_card_pic}
            projectUrl="/port"
          />
          <ProjectItem
            title="Quizapp"
            backgroundImg={quizapp}
            projectUrl="/quizapp"
          />
          <ProjectItem
            title="Warenkorb in JS"
            backgroundImg={warenkorb}
            projectUrl="/Warenkorb"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
