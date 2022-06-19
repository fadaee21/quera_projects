import "./App.css";
import { useInput } from "./useInput";

function App() {
  const email = useInput("email", "");
  const password = useInput("password", "");

  return (
    <div className="App">
      <input type={email.type} value={email.inputState} onChange={email.onChange}/>
      <input type={password.type} value={password.inputState} onChange={password.onChange} /> 
      {/* <input {...email} />
      <input {...password} /> */}
      <button
        onClick={() => console.log(email.inputState, password.inputState)}
      >
        click
      </button>
    </div>
  );
}

export default App;




