import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting/Setting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashbord" element={<Chat />}></Route>
          <Route path="/chat" element={<Home />}></Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
