import calculator from './images/desktop-calculator.jpg';
import calculatorMobile from './images/mobile-calculator.jpg';
import netflix from './images/desktop-netflix.jpg';
import netflixMobile from './images/mobile-netflix.jpg';

export const list = [
    {
        name: 'Calculator - React',
        imageDesktop: calculator,
        imageMobile: calculatorMobile,
        description: "A simple calculator using React JS",
        github: "https://github.com/daramayo90/react-calculator/",
        link: "https://daramayo90.github.io/react-calculator/"
    },
    {
        name: 'Netflix - React & TypeScript',
        imageDesktop: netflix,
        imageMobile: netflixMobile,
        description: "The backend has an MCV structure and a connection to a MongoDB cloud database which stores registered users. User login/registration was developed using JWT.\n\nThe Frontend of this project is built in React JS and TypeScript was used in some components. Axios was used for the connection with the backend.\n\nEach registered user is stored in local storage, so data is not lost when browsers are refreshed or closed.\n\nRegarding the movies, the information was taken from an external API (TMDB).",
        github: "https://github.com/daramayo90/react-netflix-ts/",
        link: "https://react-netflix-ts.herokuapp.com/"
    }
];