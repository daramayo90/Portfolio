import aramashop from './images/aramashop.jpg';
import weather from './images/weather.jpg';
import appointments from './images/appointments.jpg';
import calculator from './images/calculator.jpg';
import viandas from './images/viandas.jpg';

export const projectslist = [
   {
      id: 1,
      count: '01',
      heading: 'Next.Js & TypeScript',
      head: 'My Ecommerce',
      description:
         'Ecommerce programmed with TypeScript, using interfaces and models. Created with Next.Js for the backend and frontend, implemeting SSR, SSG e ISR with a responsive design. Authentication implemented with NextAuth, using NextAuth JWT, password hashing and validate user session. A GitHub provider was added to implement OAuth as well. Two middlewares were implemented following the best practices of Next.js. Three different useContext were created with useReducer (auth, cart & ui). Different RestFull APIs were used for the connection with MongoDB. A validation was added to prevent clients to modify values in the frontend when an order is created, the validations were performed in the backend as well as the payments processes with PayPal.',
      image: aramashop,
      link: 'https://aramashop.herokuapp.com/',
   },
   {
      id: 2,
      count: '02',
      heading: 'Vanilla Javascript',
      head: 'Weather Web App',
      description:
         'Real-time or current JSON weather and XML weather API provides access to near real-time weather information for millions of locations worldwide.',
      image: weather,
      link: 'https://free-weather-web-api.herokuapp.com/',
   },
   {
      id: 3,
      count: '03',
      heading: 'React & Tailwind CSS',
      head: 'My Appointments',
      description:
         'Appointments application where I demostrate my knowledge by passing data to a component, use the useState & useEffect hooks with conditional classes, and toggle items by passing the state to a sub-component and using values to hide or show sub-components. This application can delete records, search with a filtered array, set up a sort and add new appointments.',
      image: appointments,
      link: 'https://daramayo90.github.io/appointments-tailwind/',
   },
   {
      id: 4,
      count: '04',
      heading: 'React',
      head: 'Calculator',
      description: 'A simple calculator using React JS',
      image: calculator,
      link: 'https://daramayo90.github.io/react-calculator/',
   },
   {
      id: 5,
      count: '05',
      heading: 'WordPress',
      head: 'Viandas Cook',
      description:
         "I'm the owner of a business based in Argentina and Panama, where I created the Viandas Cook website using a CMS and made different automations of the process using Google Apps Script, Trello, Zapier among others. This is my first project where I am having profits and I continue improving the Business Model incorporating new technologies. In this business I also learned a lot about Marketing and SEO.",
      image: viandas,
      link: 'https://viandascook.com/',
   },
];
