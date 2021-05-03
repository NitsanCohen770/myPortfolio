import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'NC portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to Nitsan Cohen portfolio', // e.g: Welcome to my website
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
    'In recent years I had decided to dedicate my time and go back into web development while learning all the new technologies',
  resume:
    'https://docs.google.com/document/d/1ELsjvDRK1hoUDTDWgY8bXJs3O0v5cj3B8GrHZ-V_cdw/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'The Burger Builder',
    info:
      'This project was built with react-create-app. I also used Bootstrap, React-Form-Hook and firebase.',
    info2: '',
    url: 'https://priceless-murdock-fbed8e.netlify.app/',
    repo: 'https://github.com/NitsanCohen770/newBurger/tree/main', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'The Rebbe is alive',
    info: 'One of my first projects. Was built mostly with React and Bootstrap',
    info2: '',
    url: 'https://rebbeisalive.com/',
    repo: 'https://github.com/NitsanCohen770/rebbe/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'The Chassidic Vort',
    info: 'Just a Nice and simple quote exchanger',
    info2: '',
    url: 'https://chassidic-vort.netlify.app/',
    repo: 'https://github.com/NitsanCohen770/quoter', // if no repo, the button will not show up
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
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/NitsanCohen770/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nitsan-cohen-64b73920b/',
    },
  ],
};
// {
//   id: nanoid(),
//   name: 'twitter',
//   url: '',
// },
// {
//   id: nanoid(),
//   name: 'codepen',
//   url: '',
// },
// {
//   id: nanoid(),
//   name: 'linkedin',
//   url: '',
// },
// {
//   id: nanoid(),
//   name: 'github',
//   url: '',
// },

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
