import { RiComputerLine } from 'react-icons/ri';
import { IService, ISkill } from './type';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Dev',
    about:
      'Criação de designs Bonitos e responsivos, escalaveis SPA using <b>HTML</b>,<b>CSS</b> e <b>Reac.js</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about:
      'Gerenciamento de Banco de dados, servidores,  API usando <b>Express</b> & outros frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'Desensolvimento de REST API usando <b>Node API</b>',
  },
  {
    Icon: MdDeveloperMode,
    title: 'UI/UX designer',
    about: 'Design de Interface usando <b>Figma</b>',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Frontend Dev',
    about: 'lorem.....',
  },
];

export const languages: ISkill[] = [
  {
    name: 'HTML',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS',
    level: '60%',
    Icon: BsCircleFill,
  },

  {
    name: 'Java Script',
    level: '65%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'React Native',
    level: '50%',
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: 'SCSS',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'Design Responsivo',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Bootstrap',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Material Design',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'SEO',
    level: '70%',
    Icon: BsCircleFill,
  },
];
