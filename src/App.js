import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activity from "./Pages/Activity/Activity";
import Chat from "./Pages/Chat";
import Dashbord from "./Pages/Dashbord/Dashbord";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Setting from "./Pages/Setting/Setting";
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io.connect("https://gmb.prometteur.in:3330");

console.log(socket, "socket value");
//const socket = io();
function App() {
  useEffect(() => {
    //   const socket = io("https://gmb.prometteur.in:3330");
    //   socket.on("connect", () => console.log(socket.id));
    //   socket.on("connect_error", () => console.log(socket));

  

    // socket.on("message", (value) => {
    //   console.log("value herre", value);
    // });
    // console.log("after socket io");
  }, []);

  const sendMessageHandler = () => {
    // socket.emit("send_message", { message: "Hello lakhan send you messag" });
    alert("yes send");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/chat" element={<Home socket={socket} />}></Route>
          <Route path="/setting" element={<Setting />} />
          <Route
            path="/emit"
            element={
              <button onClick={() => sendMessageHandler()}>
                send meessage
              </button>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
