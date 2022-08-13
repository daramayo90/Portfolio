import netflix from './images/netflix.jpg';
import calculator from './images/calculator.jpg';
import weather from './images/weather.jpg';
import viandas from './images/viandas.jpg';

export const projectslist = [
    {
        "id": 1,
        "count": "01",
        "heading": "React & TypeScript",
        "head": "Netflix clone",
        "description": "The backend has an MCV structure and a connection to MongoDB which stores registered users. Login/registration was developed using JWT and hashing passwords. The Frontend of this project is built in React JS and TypeScript was used in some components. Axios was used for the connection with the backend. Each registered user is stored in local storage (without the password), so data is not lost when browsers are refreshed or closed. The list of movies was taken from an external API (TMDB).",
        "image": netflix,
        "link": "https://react-netflix-ts.herokuapp.com/"
    },
    {
        "id": 2,
        "count": "02",
        "heading": "React",
        "head": "Calculator",
        "description": "A simple calculator using React JS",
        "image": calculator,
        "link": "https://daramayo90.github.io/react-calculator/"
    },
    {
        "id": 3,
        "count": "03",
        "heading": "Vanilla Javascript",
        "head": "Weather Web App",
        "description": "Real-time or current JSON weather and XML weather API provides access to near real-time weather information for millions of locations worldwide.",
        "image": weather,
        "link": "https://free-weather-web-api.herokuapp.com/"
    },
    {
        "id": 4,
        "count": "04",
        "heading": "WordPress",
        "head": "Viandas Cook",
        "description": "I'm the owner of a business based in Argentina and Panama, where I created the Viandas Cook website using a CMS and made different automations of the process using Google Apps Script, Trello, Zapier among others. This is my first project where I am having profits and I continue improving the Business Model incorporating new technologies. In this business I also learned a lot about Marketing and SEO.",
        "image": viandas,
        "link": "https://viandascook.com/"
    }
]