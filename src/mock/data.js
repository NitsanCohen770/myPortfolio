import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi there, my name is',
  name: 'Nitsan Cohen',
  subtitle: 'I am a MERN Fullstack developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I began learning web development when I was only 13 years old. I still remember that excitement when my parents bought me those four books of java, javascript, html and c.',
  paragraphTwo:
    'Since then I have achieved a lot. I have 4 sweet children, as you can see on the profile image, and a long beard :) ',
  paragraphThree:
    'On recent years I had decided to dedicate my time and go back into web development while learning all the new technologies',
  resume: 'https://my.indeed.com/p/nitsanc-spvgpi9', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Burger Builder',
    info:
      'This porject was built with react-create-app. I also used Boostrap, React-Form-Hook and firebase.',
    info2: '',
    url: 'https://nitsancohen770.github.io/newBurger/',
    repo: 'https://github.com/NitsanCohen770/newBurger/tree/master', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nitsancohen770@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [],
};
//     {
//       id: nanoid(),
//       name: 'twitter',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'codepen',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'linkedin',
//       url: '',
//     },
//     {
//       id: nanoid(),
//       name: 'github',
//       url: '',
//     },

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
