import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activity from "./Pages/Activity/Activity";
import Chat from "./Pages/Chat";
import Dashbord from "./Pages/Dashbord/Dashbord";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Setting from "./Pages/Setting/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/chat" element={<Home />}></Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
