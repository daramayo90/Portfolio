import Header from './components/header/Header'
import Presentation from './components/presentation/Presentation'
import Skillsets from './components/skillsets/Skillsets'
import Contact from './components/contact/Contact'
import { Logos } from './components/skillsets/Logos'


function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Skillsets logos={Logos}/>
      <Contact />
    </>
  );
}

export default App;