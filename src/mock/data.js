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
  subtitle: 'I am a REACT frontend developer',
  cta: 'Using Gatsby and Next frameworks I create stunning blaze websites. Wanna know more?',
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
    img: 'solarPlanets.png',
    title: 'An impressive website that shows all the Solar Planets',
    info: 'I built this project with Gatsby framework and styled-components.',
    info2: 'Check the source code :D',
    url: 'https://solar-planets.netlify.app/earth',
    repo: 'https://github.com/NitsanCohen770/planets',
  },
  {
    id: nanoid(),
    img: 'rps.png',
    title: 'A Rock Paper Scissors (Spock Lizard) Game',
    info: 'This project was built with React and CSS modules',
    info2: 'You should definitely try and play. Be ware you might get addicted!',
    url: 'https://rpss-game.netlify.app/',
    repo: 'https://github.com/NitsanCohen770/RSPgame',
  },
  {
    id: nanoid(),
    img: 'calculator.png',
    title: 'Nice Calculator',
    info: 'This project was built with React, Styled components and Storybook',
    info2: '',
    url: 'https://frontend-calculator.netlify.app/',
    repo: 'https://github.com/NitsanCohen770/calculator',
  },
  {
    id: nanoid(),
    img: 'countdown.png',
    title: 'A countdown app',
    info:
      'This is app was build with React, CSS modules, a little bit of SASS and a lot of love :) ',
    info2: '',
    url: 'https://launching-app.netlify.app/',
    repo: 'https://github.com/NitsanCohen770/countdown',
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
    repo: 'https://github.com/NitsanCohen770/quoter',
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
