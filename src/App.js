import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import Setting from "./Pages/Setting/Setting";

localStorage.setItem(
  "a_token",
  "ya29.a0Aa4xrXMFFydFDdUk56Q_Q0dW9q7-aXLOci2o1jGXluMNF5SVHCPryn5bRfys3aRR6NLvBKxSvovQTH5NjaWIwKqlh2Uhzmgbo8GitS3WZcUH30Obp91Hdp-0R4jOBXyIFEDrsGrsJsfnYtQkHOIEBdwIwptHmQaCgYKATASARISFQEjDvL9R4Ecesa0Z2hkro1BMr5aFg0165"
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
