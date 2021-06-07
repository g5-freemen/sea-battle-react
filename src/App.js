import "./App.css";
import ContextApp from "./components/BattlefieldContext";
import Battlefield from "./components/Battlefield";
import { createStore } from "redux";

function timeMachine(state = [], action) {
  if (action.type === "ADD_TURN") {
    return [...state, action.payload];
  } else if (action.type === "TURN_BACK") {
    return [...state].filter((el, idx) => idx < action.payload);
  }
  return [...state];
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
