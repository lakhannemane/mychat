import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Activity from "./Pages/Activity/Activity";
import Dashbord from "./Pages/Dashbord/Dashbord";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Setting from "./Pages/Setting/Setting";
import io from "socket.io-client";
import Feed from "./Pages/Feed/index";
import Activity from "./Pages/Activity/Index";

const socket = io.connect("https://gmb.prometteur.in:3330");

console.log(socket, "socket value");
//const socket = io();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />}></Route>
          <Route path="/activity" element={<Activity />}></Route>

          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/chat" element={<Home socket={socket} />}></Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
