import './App.css';
import ContextApp from './components/BattlefieldContext';
import Battlefield from './components/Battlefield';
import { createStore } from 'redux';

function timeMachine(state = [], action) {
  if (action.type === 'ADD_TURN') {
    return [...state, action.payload];
    // let turnInfo = { playerBF, compBF};
    // store.dispatch({ type: 'ADD_TURN', payload: turnInfo });
    // return state;
  } else if (action.type ===  'TURN_BACK') {
    return [...state].splice(-1);
  } else
  return state;
}

export const store = createStore(timeMachine);

export default function App() {
  return (
    <ContextApp>
      <div className="App">
        <Battlefield />
      </div>
    </ContextApp>
  );
}