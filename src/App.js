import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activity from "./Pages/Activity/Activity";
import Chat from "./Pages/Chat";
import Dashbord from "./Pages/Dashbord/Dashbord";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Setting from "./Pages/Setting/Setting";

localStorage.setItem(
  "a_token",
  "ya29.a0Aa4xrXNe6_ggql1aLUYEHrClOF9vHUNrPSb4HjDOHOJ9VsmO5WsSBoLY9ML2ozFZwzEmWL9SqJtWs2-cDeZvVcVPpllI2oNa9tn5-88UjO0s7TTgUyh8L-Z941iti3datUx13xSNcHArbkfMvfTeOUjqVDPnkQaCgYKATASARISFQEjDvL9ndKvVBMzRHZ9Qo_IzyrAEQ0165"
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
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
