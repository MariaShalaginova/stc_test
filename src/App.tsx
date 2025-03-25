import "./App.css";
import Marks from "./components/Marksarea/Marks";
import Textarea from "./components/Textarea/Textarea";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <Textarea />
        <Marks />
      </div>
    </ContextProvider>
  );
}

export default App;
