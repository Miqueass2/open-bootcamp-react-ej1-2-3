import logo from './logo.svg';
import './App.css';
import ContactRenderComp from './components/container/contact_list';
/* import Greeting from './components/pure/greeting'; */
/* import GreetingF from './components/pure/greetingF'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Moic"></Greeting> */}
        {/* Componente funcional */}
        {/* <GreetingF name="mIKIKI"></GreetingF> */}
        {/* {Componente de listado de tareas} */}
        <ContactRenderComp></ContactRenderComp>
      </header>
    </div>
  );
}

export default App;
