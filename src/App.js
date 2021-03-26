import './App.css';
import ContextApp from './components/BattlefieldContext';
import Battlefield from './components/Battlefield';

export default function App() {
  return (
    <ContextApp>
      <div className="App">
        <h1 className='app-title'>
          Морской бой
        </h1>
        <Battlefield />
      </div>
    </ContextApp>
  );
}