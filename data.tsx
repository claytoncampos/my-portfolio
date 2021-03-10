import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';
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

export const projects: IProject[] = [
  {
    name: 'Web Site - Dolla Bank',
    description: 'Web Site feito em React',
    image_path: './images/website-dolla.png',
    deployed_url: 'https://website-react.claytoncampos.vercel.app/',
    github_url: 'https://github.com/claytoncampos/website-react',
    category: ['react'],
    key_techs: [
      'React',
      'styled-components',
      'react-router-dom',
      'react-icons',
      'react-scroll',
    ],
  },
  {
    name: 'Web App - Seach Bitcoin Currency',
    description: 'Web App feito em React, consumindo API ',
    image_path: './images/webapp-bitcoin.png',
    deployed_url: 'https://api-bitcoin.claytoncampos.vercel.app/',
    github_url: 'https://github.com/claytoncampos/react-consumer-api-bitcoin',
    category: ['react'],
    key_techs: ['React', 'Axios'],
  },
  {
    name: 'Web Site - Spider-Man PS5',
    description:
      'Web Site feito em React sobre o lançamento do game Spider-man PS5',
    image_path: './images/spider-man.png',
    deployed_url: '',
    github_url: 'https://github.com/claytoncampos/spider-man',
    category: ['react'],
    key_techs: ['React', 'Java Script', 'JQuery', 'Tilt', 'TweenMax', 'Sass'],
  },
  {
    name: 'Blog',
    description: 'Blog feito com NextJs',
    image_path: './images/blog.png',
    deployed_url: 'https://simple-blog-nextjs.claytoncampos.vercel.app/',
    github_url: 'https://github.com/claytoncampos/simple-blog-nextjs',
    category: ['react', 'nextjs'],
    key_techs: ['Nextjs', 'react'],
  },
  {
    name: 'Portfolio',
    description: 'Portfolio',
    image_path: './images/spider-man.png',
    deployed_url: 'https://api-bitcoin.claytoncampos.vercel.app/',
    github_url: 'https://github.com/claytoncampos/my-portfolio',
    category: ['react', 'nextjs'],
    key_techs: ['Nextjs', 'Typescript', 'Tailwind'],
  },
];
