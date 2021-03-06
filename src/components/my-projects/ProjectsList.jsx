import calculator from './images/calculator-desktop.jpg';
import calculatorMobile from './images/calculator-mobile.jpg';
import netflix from './images/netflix-desktop.jpg';
import netflixMobile from './images/netflix-mobile.jpg';
import viandas from './images/viandas-desktop.jpg';
import viandasMobile from './images/viandas-mobile.jpg';
import weather from './images/weather-desktop.jpg';
import weatherMobile from './images/weather-mobile.jpg';

export const list = [
    {
        name: 'Netflix - React & TypeScript',
        imageDesktop: netflix,
        imageMobile: netflixMobile,
        description: "100% Responsive.\n\nThe backend has an MCV structure and a connection to a MongoDB cloud database which stores registered users. User login/registration was developed using JWT and hashing passwords.\n\nThe Frontend of this project is built in React JS and TypeScript was used in some components. Axios was used for the connection with the backend.\n\nEach registered user is stored in local storage (without the password), so data is not lost when browsers are refreshed or closed.\n\nRegarding the movies, the information was taken from an external API (TMDB).",
        github: "https://github.com/daramayo90/react-netflix-ts/",
        link: "https://react-netflix-ts.herokuapp.com/"
    },
    {
        name: 'Calculator - React',
        imageDesktop: calculator,
        imageMobile: calculatorMobile,
        description: "A simple calculator using React JS",
        github: "https://github.com/daramayo90/react-calculator/",
        link: "https://daramayo90.github.io/react-calculator/"
    },
    {
        name: 'Weather Web App',
        imageDesktop: weather,
        imageMobile: weatherMobile,
        description: "Real-time or current JSON weather and XML weather API provides access to near real-time weather information for millions of locations worldwide.",
        github: "https://github.com/daramayo90/weather-webapp",
        link: "https://free-weather-web-api.herokuapp.com/"
    },
    {
        name: 'Viandas Cook - WordPress',
        imageDesktop: viandas,
        imageMobile: viandasMobile,
        description: "I'm the owner of a business based in Argentina and Panama, where I created the Viandas Cook website using a CMS and made different automations of the process using Google Apps Script, Trello, Zapier among others.\n\nThis is my first project where I am having profits and I continue improving the Business Model incorporating new technologies.\n\nIn this business I also learned a lot about Marketing and SEO.",
        github: "",
        link: "https://viandascook.com/"
    }
];