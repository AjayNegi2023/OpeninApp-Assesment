import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import {Route,Routes} from "react-router-dom";
import ToggleButton from "./components/ToggleButton";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToggleButton/>
    </div>
  );
};

export default App;
