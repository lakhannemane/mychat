import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting/Setting";

localStorage.setItem(
  "a_token",
  "ya29.a0Aa4xrXPRJ71kwHZgAtM8qo_GdZYatjaeko3aIB2xfvGr05g2MJRqsX8aJNRPGJqZy3mkleXu0X2eKZ0Efmw6kLM0RDCzOo5EL4kmFDBeMFFhPcTZhdDDX4QTE39VZqTIxIFJmXh1bWfuOq41Sajr-b4PjTaubAaCgYKATASARISFQEjDvL9UQrfY0vpEdx163_yR9Ne3w0165"
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ApiCall />} /> */}
          <Route path="/dashbord" element={<Chat />}></Route>
          <Route path="/chat" element={<Home />}></Route>
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
